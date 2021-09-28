"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[217],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,u=d["".concat(c,".").concat(h)]||d[h]||m[h]||i;return n?r.createElement(u,o(o({ref:t},p),{},{components:n})):r.createElement(u,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9803:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"C\xe0i \u0111\u1eb7t"},c=void 0,s={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"C\xe0i \u0111\u1eb7t",description:"Deploy service",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/iot-server/docs/installation",tags:[],version:"current",lastUpdatedBy:"tranphuong.080",lastUpdatedAt:1632819239,formattedLastUpdatedAt:"9/28/2021",frontMatter:{title:"C\xe0i \u0111\u1eb7t"},sidebar:"docs-tutorial",next:{title:"Ki\u1ec3m tra",permalink:"/iot-server/docs/verify"}},p=[{value:"Deploy service",id:"deploy-service",children:[]},{value:"Nh\u1eadp licensekey",id:"nh\u1eadp-licensekey",children:[]}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"deploy-service"},"Deploy service"),(0,i.kt)("p",null,"Qu\xe1 tr\xecnh c\xe0i \u0111\u1eb7t s\u1eed d\u1ee5ng quy\u1ec1n root c\u1ee7a h\u1ec7 th\u1ed1ng"),(0,i.kt)("h4",{id:"1-c\xe0i-\u0111\u1eb7t-c\xf4ng-c\u1ee5"},"1. C\xe0i \u0111\u1eb7t c\xf4ng c\u1ee5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get update\napt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common sshpass fish bash git curl watch\n")),(0,i.kt)("p",null,"C\xe1c l\u1ec7nh n\xe0y s\u1eed d\u1ee5ng fish shell, active fish shell b\u1eb1ng l\u1ec7nh"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"fish\n")),(0,i.kt)("h4",{id:"2-t\u1ea1o-th\u01b0-m\u1ee5c-ch\u1ee9a-b\u1ed9-c\xe0i-\u0111\u1eb7t-v\xe0-c\u1ea5u-h\xecnh"},"2. T\u1ea1o th\u01b0 m\u1ee5c ch\u1ee9a b\u1ed9 c\xe0i \u0111\u1eb7t v\xe0 c\u1ea5u h\xecnh"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd /opt\nmkdir makiposiot\ncd makiposiot\n")),(0,i.kt)("p",null,"S\u1eeda \u0111\u01b0\u1eddng d\u1eabn mount th\u01b0 m\u1ee5c cho docker trong 2 file ",(0,i.kt)("inlineCode",{parentName:"p"},".envDeploy")," v\xe0 ",(0,i.kt)("inlineCode",{parentName:"p"},".envFrontendDeploy")," n\u1ebfu b\u1ea1n thay \u0111\u1ed5i \u0111\u01b0\u1eddng d\u1eabn trong ",(0,i.kt)("a",{parentName:"p",href:"#2-t%E1%BA%A1o-th%C6%B0-m%E1%BB%A5c-ch%E1%BB%A9a-b%E1%BB%99-c%C3%A0i-%C4%91%E1%BA%B7t-v%C3%A0-c%E1%BA%A5u-h%C3%ACnh"},"b\u01b0\u1edbc 2")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"CONFIG_PATH=/opt/makiposiot/iot-server/config\n")),(0,i.kt)("h4",{id:"3-clone-b\u1ed9-c\xe0i-\u0111\u1eb7t-t\u1eeb-github"},"3. clone b\u1ed9 c\xe0i \u0111\u1eb7t t\u1eeb github"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/makipos/iot-server.git\ncd iot-server\nchmod -R +x script\nchmod -R +x scriptdeploy\nchmod +x install.sh\n")),(0,i.kt)("h4",{id:"4-c\xe0i-\u0111\u1eb7t-docker"},"4. C\xe0i \u0111\u1eb7t docker####"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -fsSL https://get.docker.com -o get-docker.sh\nsh get-docker.sh\n")),(0,i.kt)("h4",{id:"5-kh\u1edfi-t\u1ea1o-docker-swarm"},"5. Kh\u1edfi t\u1ea1o docker swarm"),(0,i.kt)("p",null,"Thay th\u1ebf ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," b\u1eb1ng ip c\u1ee7a net interface b\u1ea1n s\u1eed d\u1ee5ng cho m\u1ea1ng n\u1ed9i b\u1ed9 gi\u1eefa c\xe1c m\xe1y ch\u1ee7"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker swarm init --advertise-addr localhost\n")),(0,i.kt)("h4",{id:"6-c\xe0i-\u0111\u1eb7t-docker-compose"},"6. C\xe0i \u0111\u1eb7t ",(0,i.kt)("inlineCode",{parentName:"h4"},"docker-compose")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'set unames (uname -s)\nset unamem (uname -m)\n# echo "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$unames-$unamem"\ncurl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$unames-$unamem" -o /usr/local/bin/docker-compose\nchmod +x /usr/local/bin/docker-compose\n')),(0,i.kt)("h4",{id:"7-kh\u1edfi-t\u1ea1o-th\u01b0-m\u1ee5c-ch\u1ee9a-d\u1eef-li\u1ec7u-cho-server"},"7. Kh\u1edfi t\u1ea1o th\u01b0 m\u1ee5c ch\u1ee9a d\u1eef li\u1ec7u cho server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./script/prepair.sh\n")),(0,i.kt)("h4",{id:"8-ki\u1ec3m-tra-qu\xe1-tr\xecnh-c\xe0i-\u0111\u1eb7t-c\xe1c-service-ch\u1ea1y-l\u1ec7nh-n\xe0y-\u1edf-1-c\u1eeda-s\u1ed5-terminal-kh\xe1c"},"8. Ki\u1ec3m tra qu\xe1 tr\xecnh c\xe0i \u0111\u1eb7t c\xe1c service (ch\u1ea1y l\u1ec7nh n\xe0y \u1edf 1 c\u1eeda s\u1ed5 terminal kh\xe1c)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"watch -n 1 docker service ls\n")),(0,i.kt)("h4",{id:"9-deploy-c\xe1c-service"},"9. Deploy c\xe1c service####"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./scriptdeploy/deploy.sh\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ID                  NAME                                    MODE                REPLICAS            IMAGE                             PORTS\ndl26wa8pdfo4        makiposiot-emqtt_emqtt                  replicated          1/1                 makipos/emqtt:1.2.3\nwegouhqjicbo        makiposiot-mongodb_mongodb              replicated          1/1                 mongo:4.0\nadtsmho42p8c        makiposiot-redis_redis                  replicated          1/1                 redis:alpine\nqlecvm774d0w        makiposiot-redis_redis-cache            replicated          1/1                 redis:alpine\ni8wmjwltymdm        makiposiot-services_automatic-service   replicated          2/2                 makipos/automatic-service:latest\ndms83rntop4b        makiposiot-services_devices-service     replicated          2/2                 makipos/devices-service:latest\ntv55cooabbd3        makiposiot-services_relations-service   replicated          1/1                 makipos/relations-service:latest\n6zwpq2kjuclq        makiposiot-services_update-service      replicated          1/1                 makipos/update-service:latest\nwx3vi7qup1ty        makiposiot-services_users-service       replicated          2/2                 makipos/users-service:latest\ntz4dmfaswejy        makiposiot-services_files-service       replicated          1/1                 makipos/files-service:latest\nhz4dmfxvwej4        makiposiot-ssh-server_ssh-server        replicated          1/1                 makipos/ssh-server:1.2.1          \no4z35tzjby9g        makiposiot-traefik_traefik              replicated          1/1                 traefik:1.7\n\n")),(0,i.kt)("h4",{id:"10-nh\u1eadp-d\u1eef-li\u1ec7u-kh\u1edfi-t\u1ea1o-cho-db"},"10. Nh\u1eadp d\u1eef li\u1ec7u kh\u1edfi t\u1ea1o cho db"),(0,i.kt)("p",null,"B\u1ea1n c\xf3 th\u1ec3 thay \u0111\u1ed5i m\u1eadt kh\u1ea9u kh\u1edfi t\u1ea1o c\u1ee7a admin trong file ",(0,i.kt)("inlineCode",{parentName:"p"},"script/mongoshellcommand.js"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"password")," l\xe0 m\xe3 h\xf3a SHA256 c\u1ee7a ",(0,i.kt)("inlineCode",{parentName:"p"},"plainPassword")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'db.users.insert({\n   "username" : "admin",\n   "password" : "3961160ecd2395473e3bda395b1f1329b98f08676a1a6ce1006d00b6ce838828",\n   "plainPassword":"MKP123456a@",\n   "name" : "admin",\n   "roles" : [\n       "admin"\n   ],\n   "userSetting" : {},\n   "googleAssistant" : false\n });\n')),(0,i.kt)("p",null,"Ch\u1ea1y l\u1ec7nh sau \u0111\u1ec3 insert d\u1eef li\u1ec7u t\xe0i kho\u1ea3n admin ban \u0111\u1ea7u v\xe0o database"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./script/prepairdb.sh\n")),(0,i.kt)("h4",{id:"11-deploy-trang-web-qu\u1ea3n-tr\u1ecb"},"11. Deploy trang web qu\u1ea3n tr\u1ecb"),(0,i.kt)("p",null,"M\u1eb7c \u0111\u1ecbnh c\u1ea5u h\xecnh truy c\u1eadp web qu\u1ea3n tr\u1ecb l\xe0 ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")),(0,i.kt)("p",null,"S\u1eeda l\u1ea1i domain t\u1eeb ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," th\xe0nh domain b\u1ea1n mong mu\u1ed1n trong file ",(0,i.kt)("inlineCode",{parentName:"p"},"config/traefik-frontend/traefik.toml")," d\xf2ng"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[frontends.admin-makiposiot.routes.route_1]\nrule = "Host:localhost"\n')),(0,i.kt)("p",null,"V\xe0 file ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose-frontend.yml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"- REACT_APP_SERVER_ADDR=http://localhost:3028\n- REACT_APP_MQTT_SERVER_ADDR=ws://localhost:8083/mqtt\n")),(0,i.kt)("p",null,"Cu\u1ed1i c\xf9ng ch\u1ea1y l\u1ec7nh deploy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./scriptdeploy/deployFrontend.sh\n")),(0,i.kt)("h2",{id:"nh\u1eadp-licensekey"},"Nh\u1eadp licensekey"),(0,i.kt)("p",null,"Li\xean h\u1ec7 v\u1edbi ch\xfang t\xf4i : ",(0,i.kt)("a",{parentName:"p",href:"http://makihome.vn/"},"http://makihome.vn/")),(0,i.kt)("p",null,"Ho\u1eb7c tr\u1ef1c ti\u1ebfp qua email : ",(0,i.kt)("a",{parentName:"p",href:"mailto:phuongtq@makipos.com"},"phuongtq@makipos.com")),(0,i.kt)("h4",{id:"1-\u0111\u0103ng-nh\u1eadp"},"1. \u0110\u0103ng nh\u1eadp"),(0,i.kt)("p",null,"Sau khi c\xe0i \u0111\u1eb7t b\u1ea1n \u0111\xe3 c\xf3 th\u1ec3 truy c\u1eadp v\xe0o trang web qu\u1ea3n tr\u1ecb"),(0,i.kt)("p",null,"\u0110\u0103ng nh\u1eadp v\xe0o b\u1eb1ng t\xe0i kho\u1ea3n admin \u0111\xe3 \u0111\u01b0\u1ee3c kh\u1edfi t\u1ea1o trong db"),(0,i.kt)("h4",{id:"2-nh\u1eadp-licensekey"},"2. Nh\u1eadp licenseKey"),(0,i.kt)("p",null,"Click v\xe0o t\xean t\xe0i kho\u1ea3n \u1edf g\xf3c tr\xean b\xean ph\u1ea3i trang qu\u1ea3n tr\u1ecb. Ch\u1ecdn ",(0,i.kt)("inlineCode",{parentName:"p"},"Change lincense key")),(0,i.kt)("p",null,"T\u1ea1i \u0111\xe2y b\u1ea1n nh\u1eadp license key \u0111\u01b0\u1ee3c ch\xfang t\xf4i cung c\u1ea5p \u0111\u1ec3 m\u1edf kh\xf3a s\u1eed d\u1ee5ng h\u1ec7 th\u1ed1ng."))}d.isMDXComponent=!0}}]);