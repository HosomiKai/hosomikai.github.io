"use strict";(self.webpackChunkhosomikai_github_io=self.webpackChunkhosomikai_github_io||[]).push([[802],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>c});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=s(r),k=n,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||i;return r?a.createElement(c,l(l({ref:t},o),{},{components:r})):a.createElement(c,l({ref:t},o))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=k;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[u]="string"==typeof e?e:n,l[1]=p;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},6780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={tags:["Redis","PHP"]},l="phpredis vs predis \u4e0d\u4e00\u6a23\u5728\u54ea\uff1f",p={unversionedId:"\u672a\u5206\u985e/phpredis vs predis 28e0373262e644819f1fd6d199a74574.md",id:"\u672a\u5206\u985e/phpredis vs predis 28e0373262e644819f1fd6d199a74574.md",title:"phpredis vs predis \u4e0d\u4e00\u6a23\u5728\u54ea\uff1f",description:"Predis",source:"@site/docs/\u672a\u5206\u985e/phpredis vs predis 28e0373262e644819f1fd6d199a74574.md.md",sourceDirName:"\u672a\u5206\u985e",slug:"/\u672a\u5206\u985e/phpredis vs predis 28e0373262e644819f1fd6d199a74574.md",permalink:"/docs/\u672a\u5206\u985e/phpredis vs predis 28e0373262e644819f1fd6d199a74574.md",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u672a\u5206\u985e/phpredis vs predis 28e0373262e644819f1fd6d199a74574.md.md",tags:[{label:"Redis",permalink:"/docs/tags/redis"},{label:"PHP",permalink:"/docs/tags/php"}],version:"current",frontMatter:{tags:["Redis","PHP"]},sidebar:"tutorialSidebar",previous:{title:"Laravel Passport StatefulGuard didn\u2019t bind",permalink:"/docs/\u672a\u5206\u985e/Laravel Passport StatefulGuard didn\u2019t bind"},next:{title:"\u4ec0\u9ebc\u662fBIP-0044 ?",permalink:"/docs/\u672a\u5206\u985e/\u4ec0\u9ebc\u662fBIP-0044 926ef8617381408fa9c5b30853565b4c"}},d={},s=[{value:"Predis",id:"predis",level:2},{value:"<strong>PhpRedis</strong>",id:"phpredis",level:2},{value:"Installation",id:"installation",level:3},{value:"Predis vs PhpRedis",id:"predis-vs-phpredis",level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2},{value:"Reference",id:"reference",level:2}],o={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"phpredis-vs-predis-\u4e0d\u4e00\u6a23\u5728\u54ea"},"phpredis vs predis \u4e0d\u4e00\u6a23\u5728\u54ea\uff1f"),(0,n.kt)("h2",{id:"predis"},"Predis"),(0,n.kt)("p",null,"Predis\u662f\u4e00\u500b\u7528\u65bcPHP\u7684Redis\u5ba2\u6236\u7aef\u5eab\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u500b\u7c21\u6f54\u4e14\u6613\u65bc\u4f7f\u7528\u7684\u4ecb\u9762\u4f86\u8207Redis\u670d\u52d9\u9032\u884c\u4ea4\u4e92\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Predis\u5b98\u65b9\u7db2\u7ad9\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/nrk/predis"},"https://github.com/nrk/predis"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9019\u662fPredis\u7684\u5b98\u65b9GitHub\u5009\u5eab\uff0c\u4f60\u53ef\u4ee5\u5728\u9019\u88e1\u627e\u5230Predis\u7684\u6e90\u4ee3\u78bc\u3001\u6587\u6a94\u548c\u5176\u4ed6\u76f8\u95dc\u8cc7\u6e90\u3002"))),(0,n.kt)("li",{parentName:"ol"},"Predis\u7684\u5b89\u88dd\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u4f7f\u7528Composer\u4f86\u5b89\u88ddPredis\u3002\u5728\u4f60\u7684\u9805\u76ee\u76ee\u9304\u4e2d\u904b\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"composer require predis/predis\n"))))),(0,n.kt)("li",{parentName:"ol"},"\u5275\u5efaRedis\u5ba2\u6236\u7aef\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528Predis\uff0c\u4f60\u53ef\u4ee5\u8f15\u9b06\u5730\u5275\u5efa\u4e00\u500bRedis\u5ba2\u6236\u7aef\u5be6\u4f8b\uff0c\u4e26\u8207Redis\u670d\u52d9\u9032\u884c\u4ea4\u4e92\u3002\u4ee5\u4e0b\u662f\u4e00\u500b\u793a\u4f8b\u4ee3\u78bc\uff1a",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},"require 'vendor/autoload.php';\n\n// \u5275\u5efaRedis\u5ba2\u6236\u7aef\n$redis = new Predis\\Client();\n\n// \u9032\u884c\u64cd\u4f5c\n$redis->set('key', 'value');\n$value = $redis->get('key');\necho $value;\n"))))),(0,n.kt)("li",{parentName:"ol"},"\u652f\u6301\u7684Redis\u547d\u4ee4\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Predis\u652f\u6301Redis\u7684\u6240\u6709\u547d\u4ee4\uff0c\u5305\u62ec\u5b57\u7b26\u4e32\u3001\u6578\u5b57\u3001\u5217\u8868\u3001\u54c8\u5e0c\u3001\u96c6\u5408\u3001\u6709\u5e8f\u96c6\u5408\u7b49\u64cd\u4f5c\u3002\u4f60\u53ef\u4ee5\u5728Predis\u7684\u6587\u6a94\u4e2d\u627e\u5230\u6bcf\u500b\u547d\u4ee4\u7684\u7528\u6cd5\u548c\u793a\u4f8b\u3002"))),(0,n.kt)("li",{parentName:"ol"},"\u9023\u63a5\u5230Redis\u670d\u52d9\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u901a\u904e\u5728\u5275\u5efa\u5ba2\u6236\u7aef\u6642\u6307\u5b9a\u9023\u63a5\u53c3\u6578\u4f86\u9023\u63a5\u5230Redis\u670d\u52d9\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u6307\u5b9a\u4e3b\u6a5f\u540d\u3001\u7aef\u53e3\u548c\u5bc6\u78bc\u3002\u4ee5\u4e0b\u662f\u4e00\u500b\u793a\u4f8b\u4ee3\u78bc\uff1a",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-php"},"$redis = new Predis\\Client([\n    'scheme' => 'tcp',\n    'host'   => '127.0.0.1',\n    'port'   => 6379,\n    'password' => 'your_password',\n]);\n")))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"phpredis"},(0,n.kt)("strong",{parentName:"h2"},"PhpRedis")),(0,n.kt)("p",null,"phpredis\u662f\u4e00\u500b\u7528\u65bcPHP\u7684Redis\u5ba2\u6236\u7aef\u64f4\u5c55\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u500b\u7c21\u55ae\u4e14\u9ad8\u6548\u7684\u65b9\u5f0f\u4f86\u8207Redis\u670d\u52d9\u5668\u9032\u884c\u901a\u4fe1\u3002\u5b83\u652f\u6301\u5927\u90e8\u5206\u7684Redis\u547d\u4ee4\uff0c\u4e26\u4e14\u5728\u6027\u80fd\u65b9\u9762\u8868\u73fe\u51fa\u8272\u3002"),(0,n.kt)("p",null,"\u95dc\u65bcphpredis\u7684\u7279\u9ede\u548c\u512a\u52e2\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u9ad8\u6027\u80fd\uff1aphpredis\u662f\u7528C\u8a9e\u8a00\u7de8\u5beb\u7684\uff0c\u8207PHP\u5167\u7f6e\u7684Redis\u5ba2\u6236\u7aef\u76f8\u6bd4\uff0c\u5b83\u5728\u6027\u80fd\u65b9\u9762\u66f4\u512a\u79c0\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5b8c\u6574\u7684Redis\u547d\u4ee4\u652f\u6301\uff1aphpredis\u652f\u6301Redis\u7684\u5927\u90e8\u5206\u547d\u4ee4\uff0c\u5305\u62ec\u5b57\u7b26\u4e32\u3001\u54c8\u5e0c\u3001\u5217\u8868\u3001\u96c6\u5408\u3001\u6709\u5e8f\u96c6\u5408\u7b49\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u6301\u4e45\u9023\u63a5\uff1aphpredis\u652f\u6301\u6301\u4e45\u9023\u63a5\uff0c\u53ef\u4ee5\u6e1b\u5c11\u9023\u63a5\u548c\u65b7\u958b\u9023\u63a5\u7684\u958b\u92b7\uff0c\u63d0\u9ad8\u6027\u80fd\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u652f\u6301\u4e8b\u52d9\uff1aphpredis\u652f\u6301Redis\u7684\u4e8b\u52d9\u64cd\u4f5c\uff0c\u53ef\u4ee5\u5c07\u591a\u500b\u547d\u4ee4\u6253\u5305\u6210\u4e00\u500b\u539f\u5b50\u64cd\u4f5c\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u652f\u6301\u7ba1\u9053\uff1aphpredis\u652f\u6301Redis\u7684\u7ba1\u9053\u64cd\u4f5c\uff0c\u53ef\u4ee5\u5c07\u591a\u500b\u547d\u4ee4\u4e00\u6b21\u6027\u767c\u9001\u5230\u670d\u52d9\u5668\uff0c\u6e1b\u5c11\u901a\u4fe1\u958b\u92b7\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u652f\u6301Pub/Sub\uff1aphpredis\u652f\u6301Redis\u7684\u767c\u5e03/\u8a02\u95b1\u529f\u80fd\uff0c\u53ef\u4ee5\u5be6\u73fe\u6d88\u606f\u7684\u5373\u6642\u63a8\u9001\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u8a73\u7d30\u7684\u932f\u8aa4\u8655\u7406\uff1aphpredis\u63d0\u4f9b\u4e86\u8a73\u7d30\u7684\u932f\u8aa4\u8655\u7406\u6a5f\u5236\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u6355\u7372\u548c\u8655\u7406Redis\u670d\u52d9\u5668\u8fd4\u56de\u7684\u932f\u8aa4\u4fe1\u606f\u3002")),(0,n.kt)("h3",{id:"installation"},"Installation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pecl install -o -f redis\n\nrm -rf /tmp/pear\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/phpredis/phpredis/blob/develop/INSTALL.md"},"\u5176\u4ed6\u5b89\u88dd\u65b9\u6cd5")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"predis-vs-phpredis"},"Predis vs PhpRedis"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd/\u60c5\u5883"),(0,n.kt)("th",{parentName:"tr",align:null},"PHPRedis"),(0,n.kt)("th",{parentName:"tr",align:null},"Predis"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7279\u9ede"),(0,n.kt)("td",{parentName:"tr",align:null},"C\u64f4\u5c55\uff0c\u63d0\u4f9b\u4f4e\u7d1a\u548c\u9ad8\u6548\u7684Redis\u63a5\u53e3"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7d14PHP\u5eab\uff0c\u63d0\u4f9b\u9ad8\u7d1a\u548c\u6613\u65bc\u4f7f\u7528\u7684Redis\u63a5\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u652f\u63f4\u7684\u529f\u80fd"),(0,n.kt)("td",{parentName:"tr",align:null},"\u652f\u63f4\u6240\u6709Redis\u529f\u80fd\u548c\u547d\u4ee4\uff0c\u5305\u62ec\u767c\u5e03/\u8a02\u95b1\u3001Lua\u8173\u672c\u3001\u4e8b\u52d9\u548c\u7ba1\u9053"),(0,n.kt)("td",{parentName:"tr",align:null},"\u652f\u63f4\u5927\u591a\u6578Redis\u529f\u80fd\u548c\u547d\u4ee4\uff0c\u4f46\u67d0\u4e9b\u9ad8\u7d1a\u529f\u80fd\u53ef\u80fd\u6709\u9650\u5236\u6216\u9700\u8981\u984d\u5916\u7684\u89e3\u6c7a\u65b9\u6848")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u6548\u80fd"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9ad8\u6548\uff0c\u76f4\u63a5\u8207Redis\u4ea4\u4e92\uff0c\u6e1b\u5c11\u6578\u64da\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u7684\u958b\u92b7"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7565\u4f4e\u65bcPHPRedis\uff0c\u9700\u8981\u6578\u64da\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u65b9\u4fbf\u6027"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u4f4e\u7d1a\u63a5\u53e3\uff0c\u5c0d\u61c9Redis\u547d\u4ee4\u96c6\uff0c\u5c0d\u6709\u7d93\u9a57\u7684Redis\u7528\u6236\u6709\u512a\u52e2"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u9ad8\u7d1a\u4e14\u76f4\u89c0\u7684API\uff0c\u5c0d\u521d\u5b78\u8005\u53cb\u597d\uff0c\u7c21\u5316\u4e86Redis\u4f7f\u7528")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4f9d\u8cf4\u6027"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u5b89\u88ddPHPRedis\u64f4\u5c55"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7121\u984d\u5916\u4f9d\u8cf4\uff0c\u53ef\u901a\u904eComposer\u8f15\u9b06\u5b89\u88dd")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u9069\u7528\u60c5\u5883"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9ad8\u7d1aRedis\u4f7f\u7528\u3001\u5c0d\u6027\u80fd\u8981\u6c42\u8f03\u9ad8\u7684\u9805\u76ee"),(0,n.kt)("td",{parentName:"tr",align:null},"\u521d\u5b78\u8005\u3001\u5c0d\u65bc\u7c21\u5316Redis\u4f7f\u7528\u6709\u9700\u6c42\u7684\u9805\u76ee")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u512a\u9ede"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9ad8\u6548\u3001\u652f\u63f4\u6240\u6709Redis\u529f\u80fd\u3001\u5c0d\u6709\u7d93\u9a57\u7684Redis\u7528\u6236\u53cb\u597d"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7c21\u55ae\u6613\u7528\u3001\u7121\u984d\u5916\u4f9d\u8cf4\u3001\u5c0d\u521d\u5b78\u8005\u53cb\u597d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7f3a\u9ede"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u5b89\u88dd\u64f4\u5c55\u3001\u5c0d\u521d\u5b78\u8005\u8f03\u8907\u96dc"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6548\u80fd\u7565\u4f4e\u3001\u67d0\u4e9b\u9ad8\u7d1a\u529f\u80fd\u6709\u9650\u5236")))),(0,n.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,n.kt)("p",null,"PHPRedis\u662f\u66f4\u9ad8\u6548\u548c\u529f\u80fd\u5b8c\u6574\u7684\u9078\u64c7\uff0c\u5c24\u5176\u9069\u7528\u65bc\u9ad8\u7d1aRedis\u4f7f\u7528\u3002\n\u7136\u800c\uff0cPredis\u63d0\u4f9b\u4e86\u66f4\u7c21\u55ae\u548c\u6613\u65bc\u4f7f\u7528\u7684API\uff0c\u4f7f\u5176\u6210\u70ba\u521d\u5b78\u8005\u6216\u6c92\u6709\u56b4\u683c\u6027\u80fd\u8981\u6c42\u7684\u9805\u76ee\u7684\u826f\u597d\u9078\u64c7\u3002"),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/phpredis/phpredis"},"GitHub - phpredis/phpredis: A PHP extension for Redis"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://redis.io/docs/"},"Documentation")))))}m.isMDXComponent=!0}}]);