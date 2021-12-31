"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[330],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,c=function(t,e){if(null==t)return{};var n,r,c={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}var a=r.createContext({}),p=function(t){var e=r.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(a.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},v=r.forwardRef((function(t,e){var n=t.components,c=t.mdxType,o=t.originalType,a=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),v=p(n),f=c,y=v["".concat(a,".").concat(f)]||v[f]||s[f]||o;return n?r.createElement(y,i(i({ref:e},l),{},{components:n})):r.createElement(y,i({ref:e},l))}));function f(t,e){var n=arguments,c=e&&e.mdxType;if("string"==typeof t||c){var o=n.length,i=new Array(o);i[0]=v;var u={};for(var a in e)hasOwnProperty.call(e,a)&&(u[a]=e[a]);u.originalType=t,u.mdxType="string"==typeof t?t:c,i[1]=u;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},8896:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return l},default:function(){return v}});var r=n(7462),c=n(3366),o=(n(7294),n(3905)),i=["components"],u={title:"HTTP"},a=void 0,p={unversionedId:"overview/security/http",id:"overview/security/http",isDocsHomePage:!1,title:"HTTP",description:"Http api \u0111\u01b0\u1ee3c cung c\u1ea5p th\xf4ng qua c\u1ed5ng d\u1ecbch v\u1ee5 3028, 3029(https) s\u1eed d\u1ee5ng c\u01a1 ch\u1ebf token x\xe1c th\u1ef1c trong m\u1ed7i truy v\u1ea5n.",source:"@site/docs/overview/security/http.md",sourceDirName:"overview/security",slug:"/overview/security/http",permalink:"/iot-server/docs/overview/security/http",tags:[],version:"current",lastUpdatedBy:"tranphuong.080",lastUpdatedAt:1632897003,formattedLastUpdatedAt:"9/29/2021",frontMatter:{title:"HTTP"},sidebar:"overview",previous:{title:"MQTT",permalink:"/iot-server/docs/overview/security/mqtt"},next:{title:"C\u1ea5u tr\xfac d\u1eef li\u1ec7u",permalink:"/iot-server/docs/overview/database_struct"}},l=[],s={toc:l};function v(t){var e=t.components,n=(0,c.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Http api \u0111\u01b0\u1ee3c cung c\u1ea5p th\xf4ng qua c\u1ed5ng d\u1ecbch v\u1ee5 3028, 3029(https) s\u1eed d\u1ee5ng c\u01a1 ch\u1ebf token x\xe1c th\u1ef1c trong m\u1ed7i truy v\u1ea5n."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://makihome.vn/wp-content/uploads/2020/07/http-secure.png",alt:null})),(0,o.kt)("p",null,"V\u1edbi m\u1ed7i token \u0111\u1ecbnh danh c\u1ee7a user, t\u1ea5t c\u1ea3 truy v\u1ea5n s\u1ebd ph\u1ea3i \u0111i qua 1 l\u1edbp x\xe1c th\u1ef1c ki\u1ec3m tra quy\u1ec1n h\u1ea1n c\u1ee7a user \u0111\xf3 \u0111\u1ed1i v\u1edbi t\u1eebng endpoint."),(0,o.kt)("p",null,"L\u1edbp x\xe1c th\u1ef1c \u0111\u01b0\u1ee3c thi\u1ebft k\u1ebf linh \u0111\u1ed9ng v\xe0 ch\u1eb7t ch\u1ebd, cho ph\xe9p ki\u1ec3m tra v\xe0 s\u1eeda \u0111\u1ed5i truy v\u1ea5n c\u1ee7a ng\u01b0\u1eddi d\xf9ng tr\u01b0\u1edbc khi \u0111\u1ebfn v\u1edbi service x\u1eed l\xfd."),(0,o.kt)("p",null,"T\u1ea5t c\u1ea3 quy\u1ec1n h\u1ea1n n\xe0y \u0111\u1ec1u c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c t\u1ea1o m\u1edbi, thu h\u1ed3i x\xf3a b\u1ecf b\u1edfi ng\u01b0\u1eddi d\xf9ng c\xf3 quy\u1ec1n qu\u1ea3n tr\u1ecb h\u1ec7 th\u1ed1ng."))}v.isMDXComponent=!0}}]);