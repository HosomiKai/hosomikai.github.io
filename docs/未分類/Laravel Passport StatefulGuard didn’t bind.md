---
tags:
  - Laravel
  - OAuth
  - Passport
---
# Laravel Passport StatefulGuard didn’t bind

## Background

最近在開發一個公司服務的時候，因為預期未來可能會開放服務給公司的各事業體使用也不排除之後對外開放，因此決定開發一個OAuth2.0 的授權機制。

在OAuth 的功能上我們選擇使用Laravel官方提供的Passport Package 以此為基礎實作。

## Environment

- Passport Version: 11.8.8
- Laravel Version: 10.5.0
- PHP Version: 8.2.7

## Description

為了方便開發與擴充，所以手動註冊了oauth 的 route，建立了相關的Controllers 並且 extends 原本的Passport 相關的Controller，註冊後測試時得到錯誤：

```php
 //BindingResolutionException

Target [Illuminate\Contracts\Auth\StatefulGuard] is not instantiable while building [App\OAuth\Controllers\AuthorizationController].
```

## Steps to Reproduce

1. Create a Controller

```php
<?php
namespace App\Http\Controllers\Passport;

class AuthorizationController extends \Laravel\Passport\Http\Controllers\AuthorizationController
{}
```

2. Ignore Passport routes and add authorize route

```php
//AppServiceProvider

//...

public function register()
{
	//...

	Passport::ignoreRoutes();

}
```

```php
//routes/web.php

Route::get('/oauth/authorize', [\App\OAuth\Controllers\AuthorizationController::class, 'authorize'])
  ->middleware('web')
  ->name('authorizations.authorize');
```

3. Accessing the authorize route `/oauth/authorize?client_id=...&redurect_uri=...&response_type=code`

## Solution

在 `AuthServiceProvider.php` 裡面加入綁定實例

```php
//AuthServiceProvider.php

$this->app->when(\App\OAuth\Controllers\AuthorizationController::class)
      ->needs(StatefulGuard::class)
      ->give(fn () => Auth::guard(config('passport.guard', null)));
```

## Analyse

翻了一下原本的 `PassportServiceProvider.php` 發現他原本就有加入動態綁定：

```php
use Laravel\Passport\Http\Controllers\AuthorizationController;

//...
$this->app->when(AuthorizationController::class)
      ->needs(StatefulGuard::class)
      ->give(fn () => Auth::guard(config('passport.guard', null)));
```

不過他針對的綁定對象是 `Laravel\Passport\Http\Controllers\AuthorizationController::class` ，因此當我們複寫 route 時，綁定對象轉變為 `App\OAuth\Controllers\AuthorizationController::class` ，因此這層綁定就失效了。

`StatefulGuard` 是一個 Contract，通常在 middleware 調用時決定，或透過 `Auth::guard()` 去 new 出實例。

```php
//Laravel\Passport\Http\Controllers\AuthorizationController

/**
 * Create a new controller instance.
 *
 * @param  \League\OAuth2\Server\AuthorizationServer  $server
 * @param  \Illuminate\Contracts\Auth\StatefulGuard  $guard
 * @param  \Laravel\Passport\Contracts\AuthorizationViewResponse  $response
 * @return void
 */
public function __construct(AuthorizationServer $server,
                            StatefulGuard $guard,
                            AuthorizationViewResponse $response)
{
    $this->server = $server;
    $this->guard = $guard;
    $this->response = $response;
}
```

但在此處他是透過 `Laravel` 的 `Container` 以 `Dependency Inject(DI)` 去管理，在這一層的時候 `Laravel` 並不知道要將 `\Illuminate\Contracts\Auth\StatefulGuard::class` 綁定到哪個實例，因此會噴出這個 `Contract` is not instantiable 的錯誤。

因此透過重新設定綁定，當 `Laravel` 要透過 `Container` 建立 `App\OAuth\Controllers\AuthorizationController::class` 時，將 `Auth::guard()` new 出來的實例綁定到 `Illuminate\Contracts\Auth\StatefulGuard::class` 這個 `Contract` 即可解決這個問題。

## Reference

- [StatefulGuard didn't bind when using extending class AuthorizationController](https://github.com/laravel/passport/issues/1612)

- [Laravel Passport](https://github.com/laravel/passport)