"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[689],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=l(r),d=i,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8825:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),c=["components"],a={title:"SSL"},p=void 0,l={unversionedId:"tutorial/config/ssl",id:"tutorial/config/ssl",isDocsHomePage:!1,title:"SSL",description:"C\xf3 3 giao di\u1ec7n k\u1ebft n\u1ed1i cho ph\xe9p c\u1ea5u h\xecnh SSL",source:"@site/docs/tutorial/config/ssl.md",sourceDirName:"tutorial/config",slug:"/tutorial/config/ssl",permalink:"/iot-server/docs/tutorial/config/ssl",tags:[],version:"current",lastUpdatedBy:"tranphuong.080",lastUpdatedAt:1640919804,formattedLastUpdatedAt:"12/31/2021",frontMatter:{title:"SSL"},sidebar:"tutorial",previous:{title:"Domain",permalink:"/iot-server/docs/tutorial/config/domain"},next:{title:"Service",permalink:"/iot-server/docs/tutorial/config/service"}},s=[{value:"emqtt",id:"emqtt",children:[]},{value:"service api ssl",id:"service-api-ssl",children:[{value:"traefik 2",id:"traefik-2",children:[]},{value:"traefik 1.7 (dedicated)",id:"traefik-17-dedicated",children:[]}]},{value:"https cho web service",id:"https-cho-web-service",children:[]}],u={toc:s};function f(e){var t=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"C\xf3 3 giao di\u1ec7n k\u1ebft n\u1ed1i cho ph\xe9p c\u1ea5u h\xecnh SSL"),(0,o.kt)("h2",{id:"emqtt"},"emqtt"),(0,o.kt)("p",null,"S\u1eeb d\u1ee5ng cho port 8084 (wss) v\xe0 8883 (mqtt ssl)"),(0,o.kt)("p",null,"Copy file ",(0,o.kt)("inlineCode",{parentName:"p"},"cacert.pem")," v\xe0o th\u01b0 m\u1ee5c ",(0,o.kt)("inlineCode",{parentName:"p"},"config/emqtt/certs")),(0,o.kt)("p",null,"C\u1ea5u h\xecnh n\xe0y \u0111\u01b0\u1ee3c x\xe1c \u0111\u1ecbnh trong file ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose-emqtt.yml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- EMQ_LISTENER__SSL__EXTERNAL__CACERTFILE=/opt/emqttd/etc/certs/cacert.pem\n- EMQ_LISTENER__WSS__EXTERNAL__CACERTFILE=/opt/emqttd/etc/certs/cacert.pem\n")),(0,o.kt)("h2",{id:"service-api-ssl"},"service api ssl"),(0,o.kt)("p",null,"C\u1ea5u h\xecnh SSL cho API service (https) \\\nQu\xe1 tr\xecnh c\u1ea5u h\xecnh n\xe0y ph\u1ee5 thu\u1ed9c v\xe0o traefik service"),(0,o.kt)("h3",{id:"traefik-2"},"traefik 2"),(0,o.kt)("p",null,"Copy file ",(0,o.kt)("inlineCode",{parentName:"p"},"server.crt")," v\xe0 ",(0,o.kt)("inlineCode",{parentName:"p"},"server.key")," v\xe0o trong th\u01b0 m\u1ee5c ",(0,o.kt)("inlineCode",{parentName:"p"},"config/traefik/cert"),"\\\n2 file n\xe0y \u0111\u01b0\u1ee3c ch\u1ec9nh \u0111\u1ecbnh b\u1edfi ",(0,o.kt)("inlineCode",{parentName:"p"},"certs.toml"),". \\\n",(0,o.kt)("inlineCode",{parentName:"p"},"certs.toml")," \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng nh\u01b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"file provider")," \u0111\u1ed1i v\u1edbi traefik 2 (ch\u1ec9 \u0111\u1ecbnh trong ",(0,o.kt)("inlineCode",{parentName:"p"},"traefik.toml"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[providers]\n  [providers.file]\n    filename = "/etc/traefik/certs.toml"\n')),(0,o.kt)("p",null,"Chi ti\u1ebft xem t\u1ea1i ",(0,o.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/https/overview/"},"doc.traefik.io")),(0,o.kt)("h3",{id:"traefik-17-dedicated"},"traefik 1.7 (dedicated)"),(0,o.kt)("p",null,"Copy file ",(0,o.kt)("inlineCode",{parentName:"p"},"server_pro.crt")," v\xe0 ",(0,o.kt)("inlineCode",{parentName:"p"},"server_pro.key")," v\xe0o trong th\u01b0 m\u1ee5c ",(0,o.kt)("inlineCode",{parentName:"p"},"config/traefik/cert")),(0,o.kt)("p",null,"Trong file ",(0,o.kt)("inlineCode",{parentName:"p"},"config/traefik/traefik.toml")," t\xecm v\xe0 b\u1ecf ch\xfa th\xedch \u0111o\u1ea1n :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# [entryPoints.https]\n# address = ":3029"\n#   [entryPoints.https.tls]\n#     [[entryPoints.https.tls.certificates]]\n#     CertFile = "/etc/traefik/cert/server_pro.crt"\n#     KeyFile = "/etc/traefik/cert/server_pro.key"\n')),(0,o.kt)("h2",{id:"https-cho-web-service"},"https cho web service"),(0,o.kt)("p",null,"C\xf3 th\u1ec3 c\xe0i \u0111\u1eb7t cert t\u01b0\u01a1ng t\u1ef1 nh\u01b0 \u0111\u1ed1i v\u1edbi api service, ho\u1eb7c c\xf3 th\u1ec3 c\u1ea5u h\xecnh free ssl ",(0,o.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"letsencrypt")," theo h\u01b0\u1edbng d\u1eabn t\u1ea1i ",(0,o.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/v1.7/configuration/acme/"},"\u0111\xe2y")))}f.isMDXComponent=!0}}]);