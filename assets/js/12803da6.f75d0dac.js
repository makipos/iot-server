"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[526],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?i.createElement(f,a(a({ref:t},p),{},{components:r})):i.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4983:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var i=r(7462),n=r(3366),o=(r(7294),r(3905)),a=["components"],s={title:"Ki\u1ec3m tra"},c=void 0,l={unversionedId:"tutorial/install/verify",id:"tutorial/install/verify",isDocsHomePage:!1,title:"Ki\u1ec3m tra",description:"1. Ki\u1ec3m tra ho\u1ea1t \u0111\u1ed9ng c\u1ee7a c\xe1c service",source:"@site/docs/tutorial/install/verify.md",sourceDirName:"tutorial/install",slug:"/tutorial/install/verify",permalink:"/iot-server/docs/tutorial/install/verify",tags:[],version:"current",lastUpdatedBy:"tranphuong.080",lastUpdatedAt:1632915533,formattedLastUpdatedAt:"9/29/2021",frontMatter:{title:"Ki\u1ec3m tra"},sidebar:"tutorial",previous:{title:"C\xe0i \u0111\u1eb7t",permalink:"/iot-server/docs/tutorial/install/installation"},next:{title:"C\u1ea5u tr\xfac th\u01b0 m\u1ee5c",permalink:"/iot-server/docs/tutorial/folder_structure"}},p=[],u={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ki\u1ec3m tra ho\u1ea1t \u0111\u1ed9ng c\u1ee7a c\xe1c service")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"watch -n 1 docker service ls\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ID             NAME                                    MODE         REPLICAS   IMAGE                            PORTS\n0ttjoiinfoda   makiposiot-emqtt_emqtt                  replicated   1/1        makipos/emqtt:1.3.0\nl4ynzxoyidmd   makiposiot-frontend_admin-makiposiot    replicated   1/1        makipos/admin-smarthome:latest\ndov3uxxcuwfj   makiposiot-mongodb_mongodb              replicated   1/1        mongo:4.0\npi8gj9x5y70u   makiposiot-redis_redis                  replicated   1/1        redis:latest\nmzzf4iewmzvh   makiposiot-redis_redis-cache            replicated   1/1        redis:latest\nvszzg2fhjyi3   makiposiot-services_automatic-service   replicated   2/2        makipos/automatic-service:1\ntu97vc22v7fh   makiposiot-services_devices-service     replicated   2/2        makipos/devices-service:1\n8xx8ul8amvu3   makiposiot-services_files-service       replicated   1/1        makipos/files-service:1\nglw1s1iziddm   makiposiot-services_relations-service   replicated   2/2        makipos/relations-service:1\n9fai0op272r8   makiposiot-services_update-service      replicated   1/1        makipos/update-service:1\ndfn50lsm08wj   makiposiot-services_users-service       replicated   2/2        makipos/users-service:1\n3adm45etof05   makiposiot-ssh-server_ssh-server        replicated   1/1        makipos/ssh-server:1.3.0         *:2222->22/tcp\nwuag6rcjtcem   makiposiot-traefik_traefik              replicated   1/1        traefik:1.7\n\n")))}m.isMDXComponent=!0}}]);