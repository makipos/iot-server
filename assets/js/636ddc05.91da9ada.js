"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[463],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return g}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,l=o(t,["components","mdxType","originalType","parentName"]),s=p(n),g=a,f=s["".concat(u,".").concat(g)]||s[g]||h[g]||i;return n?r.createElement(f,c(c({ref:e},l),{},{components:n})):r.createElement(f,c({ref:e},l))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,c=new Array(i);c[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4931:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),c=["components"],o={title:"Gateway"},u=void 0,p={unversionedId:"gateway",id:"gateway",isDocsHomePage:!1,title:"Gateway",description:"Bao g\u1ed3m c\xe1c service nh\u1eadn k\u1ebft n\u1ed1i t\u1eeb thi\u1ebft b\u1ecb ho\u1eb7c ng\u01b0\u1eddi d\xf9ng, ph\xe2n ph\u1ed1i truy v\u1ea5n, c\xe2n b\u1eb1ng t\u1ea3i t\u1edbi c\xe1c service x\u1eed l\xfd t\xe1c v\u1ee5.",source:"@site/docs/gateway.md",sourceDirName:".",slug:"/gateway",permalink:"/iot-server/docs/gateway",tags:[],version:"current",lastUpdatedBy:"tranphuong.080",lastUpdatedAt:1632819239,formattedLastUpdatedAt:"9/28/2021",frontMatter:{title:"Gateway"},sidebar:"docs",previous:{title:"Database",permalink:"/iot-server/docs/database"},next:{title:"User",permalink:"/iot-server/docs/users_service"}},l=[{value:"Traefik (HTTP gateway)",id:"traefik-http-gateway",children:[]},{value:"EMQTT (MQTT gateway)",id:"emqtt-mqtt-gateway",children:[]}],h={toc:l};function s(t){var e=t.components,n=(0,a.Z)(t,c);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Bao g\u1ed3m c\xe1c service nh\u1eadn k\u1ebft n\u1ed1i t\u1eeb thi\u1ebft b\u1ecb ho\u1eb7c ng\u01b0\u1eddi d\xf9ng, ph\xe2n ph\u1ed1i truy v\u1ea5n, c\xe2n b\u1eb1ng t\u1ea3i t\u1edbi c\xe1c service x\u1eed l\xfd t\xe1c v\u1ee5."),(0,i.kt)("h2",{id:"traefik-http-gateway"},(0,i.kt)("a",{parentName:"h2",href:"https://docs.traefik.io/"},"Traefik")," (HTTP gateway)"),(0,i.kt)("p",null,"So v\u1edbi ",(0,i.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"NGINX")," Traefik \u0111\u01b0\u1ee3c ph\xe1t tri\u1ec3n sau n\xe0y c\xf3 nh\u1eefng t\xednh n\u0103ng h\u1ed7 tr\u1ee3 t\u1ed1i \u01b0u \u0111\u1ec3 ho\u1ea1t \u0111\u1ed9ng c\xf9ng docker swarm c\xf9ng v\u1edbi hi\u1ec7u n\u0103ng cao. C\u1ea5u h\xecnh \u0111\u01a1n gi\u1ea3n v\xe0 linh \u0111\u1ed9ng."),(0,i.kt)("p",null,"Service auto discovery t\u1ef1 \u0111\u1ed9ng t\xecm ki\u1ebfm, ki\u1ec3m tra \u0111\u1ed9 s\u1eb5n s\xe0ng c\u1ee7a c\xe1c service d\u1ecbch v\u1ee5, \u0111\u1ea3m b\u1ea3o ho\u1ea1t \u0111\u1ed9ng API lu\xf4n \u1ed5n \u0111\u1ecbnh, kh\xf4ng b\u1ecb \u1ea3nh h\u01b0\u01a1ng gi\xe1n \u0111o\u1ea1n b\u1edfi c\xe1c qu\xe1 tr\xecnh c\u1eadp nh\u1eadt s\u1eeda ch\u1eefa service, scale up, down."),(0,i.kt)("p",null,"D\u1ef1 tr\xf9 cho vi\u1ec7c m\u1edf r\u1ed9ng h\u1ec7 th\u1ed1ng, ch\xfang t\xf4i l\u1ef1a ch\u1ecdn Traefik h\u1ed7 tr\u1ee3 kh\u1ea3 n\u0103ng ho\u1ea1t \u0111\u1ed9ng ch\u1ebf \u0111\u1ed9 cluster."),(0,i.kt)("h2",{id:"emqtt-mqtt-gateway"},(0,i.kt)("a",{parentName:"h2",href:"http://emqtt.io/"},"EMQTT")," (MQTT gateway)"),(0,i.kt)("p",null,"Opensource mqtt broker hi\u1ec7u n\u0103ng cao. Cung c\u1ea5p nhi\u1ec1u giao di\u1ec7n ph\u1ed5 bi\u1ebfn cho c\xe1c \u1ee9ng d\u1ee5ng IOT"),(0,i.kt)("p",null,"H\u1ed7 tr\u1ee3 kh\u1ea3 n\u0103ng ph\xe2n quy\u1ec1n k\u1ebft n\u1ed1i t\u1edbi t\u1eebng topic gi\xfap cho qu\xe1 tr\xecnh b\u1ea3o m\u1eadt thu\u1eadt ti\u1ec7n, kh\xf4ng c\u1ea7n service trung gian ki\u1ec3m duy\u1ec7t c\xe1c b\u1ea3n tin. Do v\u1eady t\u1ed1c \u0111\u1ed9 truy\u1ec1n t\u1ea3i b\u1ea3n tin \u0111\u1ea1t hi\u1ec7u n\u0103ng cao nh\u1ea5t m\xe0 v\u1eabn \u0111\u1ea3m b\u1ea3o ph\xe2n quy\u1ec1n ch\u1eb7t ch\u1ebd."),(0,i.kt)("p",null,"Cho ph\xe9p ti\u1ebfp nh\u1eadn duy tr\xec h\u01a1n 100000 k\u1ebft n\u1ed1i tr\xean m\u1ed9t node. \u0110\u1ed3ng th\u1eddi d\u1ec5 d\xe0ng m\u1edf r\u1ed9ng t\u1ea3i b\u1eb1ng c\u01a1 ch\u1ebf ",(0,i.kt)("a",{parentName:"p",href:"https://emqtt.io/docs/v2/cluster.html"},"cluster")))}s.isMDXComponent=!0}}]);