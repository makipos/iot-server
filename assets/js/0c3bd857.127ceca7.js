"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[958],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(r),h=i,d=u["".concat(s,".").concat(h)]||u[h]||l[h]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var m=2;m<a;m++)c[m]=r[m];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5982:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),c=["components"],o={title:"S\u1ef1 c\u1ed1"},s=void 0,m={unversionedId:"tutorial/mantain/recover",id:"tutorial/mantain/recover",isDocsHomePage:!1,title:"S\u1ef1 c\u1ed1",description:"Service kh\xf4ng ph\u1ea3n h\u1ed3i",source:"@site/docs/tutorial/mantain/recover.md",sourceDirName:"tutorial/mantain",slug:"/tutorial/mantain/recover",permalink:"/iot-server/docs/tutorial/mantain/recover",tags:[],version:"current",lastUpdatedBy:"tranphuong.080",lastUpdatedAt:1633075818,formattedLastUpdatedAt:"10/1/2021",frontMatter:{title:"S\u1ef1 c\u1ed1"},sidebar:"tutorial",previous:{title:"B\u1ea3o m\u1eadt",permalink:"/iot-server/docs/tutorial/mantain/security"},next:{title:"Backup",permalink:"/iot-server/docs/tutorial/mantain/backup"}},p=[{value:"Service kh\xf4ng ph\u1ea3n h\u1ed3i",id:"service-kh\xf4ng-ph\u1ea3n-h\u1ed3i",children:[]}],l={toc:p};function u(e){var t=e.components,r=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"service-kh\xf4ng-ph\u1ea3n-h\u1ed3i"},"Service kh\xf4ng ph\u1ea3n h\u1ed3i"),(0,a.kt)("p",null,"Th\xf4ng th\u01b0\u1eddng service trong qu\xe1 tr\xecnh ho\u1ea1t \u0111\u1ed9ng c\xf3 th\u1ec3 g\u1eb7p t\xecnh tr\u1ea1ng ph\u1ea3n h\u1ed3i ch\u1eadm ho\u1eb7c kh\xf4ng ph\u1ea3n h\u1ed3i do l\u01b0\u1ee3ng truy v\u1ea5n t\u0103ng \u0111\u1ed9t bi\u1ebfn."),(0,a.kt)("p",null,"C\xe1c service \u0111\xe3 \u0111\u01b0\u1ee3c c\xe0i \u0111\u1eb7t c\u01a1 ch\u1ebf gi\xe1m s\xe1t t\u1ef1 \u0111\u1ed9ng th\xf4ng qua health check c\u1ee7a docker, s\u1ebd \u0111\u01b0\u1ee3c t\u1ef1 \u0111\u1ed9ng kh\u1edfi \u0111\u1ed9ng l\u1ea1i khi ph\xe1t hi\u1ec7n. Tuy nhi\xean trong m\u1ed9t s\u1ed1 tr\u01b0\u1eddng h\u1ee3p, c\xe0i \u0111\u1eb7t n\xe0y kh\xf4ng ph\u1ea3n \u1ee9ng l\u1ea1i k\u1ecbp th\u1eddi th\xec b\u1ea1n c\xf3 th\u1ec3 kh\u1edfi \u0111\u1ed9ng l\u1ea1i service b\u1ecb treo b\u1eb1ng tay th\xf4ng qua l\u1ec7nh"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-script"},"docker service update --force <T\xean service>\n")),(0,a.kt)("p",null,"B\u1ea1n c\xf3 th\u1ec3 ki\u1ec3m tra danh s\xe1ch c\xe1c service b\u1eb1ng l\u1ec7nh"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-script"},"docker service ls\n\nID             NAME                                           MODE         REPLICAS   IMAGE                                                               PORTS\n2gx7wm3eyg6t   smarthome-emqtt_emqtt                          replicated   1/1        registry.makipos.net/smarthome/emqtt:1.3.0-p\n75i9118b57q4   smarthome-frontend_admin-smarthome             replicated   1/1        registry.makipos.net/smarthome/admin-smarthome:1.20.16-p\n73lk0xa58acx   smarthome-mongodb_mongodb                      replicated   1/1        makipos/mongodb:4.0\nwc352vzbk0zz   smarthome-redis_redis                          replicated   1/1        redis:latest\nje9gesg2v746   smarthome-redis_redis-cache                    replicated   1/1        redis:latest\nux57tiriyd1s   smarthome-services_active-connection-service   replicated   1/1        registry.makipos.net/smarthome/active-connection-service:1.3.14-p\nq5y1h02r16sp   smarthome-services_automatic-service           replicated   2/2        registry.makipos.net/smarthome/automatic-service:1.15.1-p\n62jnsj1nr8ss   smarthome-services_commercial-service          replicated   1/1        registry.makipos.net/smarthome/commercial-service:1.2.18-p\na8y21kc1qe3z   smarthome-services_devices-service             replicated   2/2        registry.makipos.net/smarthome/devices-service:1.20.18-p\nd3dmucgi4jyd   smarthome-services_factory-service             replicated   1/1        registry.makipos.net/makipos/factory-service:1.7.7-p\nfh4s13p3w95g   smarthome-services_files-service               replicated   1/1        registry.makipos.net/smarthome/files-service:1.2.3-p\n1kjx9ofd8u5w   smarthome-services_relations-service           replicated   2/2        registry.makipos.net/smarthome/relations-service:1.12.7-p\n8dmto5sm5sbv   smarthome-services_update-service              replicated   1/1        registry.makipos.net/smarthome/update-service:1.7.22-p\nsm0nvubu7an5   smarthome-services_users-service               replicated   2/2        registry.makipos.net/smarthome/users-service:1.24.12-p\nxavp05zkr8rq   smarthome-traefik_traefik                      replicated   1/1        registry.makipos.net/smarthome/traefik:1.2.1-p\n")))}u.isMDXComponent=!0}}]);