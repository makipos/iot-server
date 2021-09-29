---
title: "Cài đặt"
---

## Deploy service

Quá trình cài đặt sử dụng quyền root của hệ thống

#### 1. Cài đặt công cụ

```shell
apt-get update
apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common sshpass fish bash git curl watch
```

Các lệnh này sử dụng fish shell, active fish shell bằng lệnh
```shell
fish
```

#### 2. Tạo thư mục chứa bộ cài đặt và cấu hình

```shell
cd /opt
mkdir makiposiot
cd makiposiot
```

#### 3. clone bộ cài đặt từ github
```shell
git clone --depth=1 https://github.com/makipos/iot-server.git
cd iot-server
chmod -R +x script
chmod -R +x scriptdeploy
chmod +x install.fish
```

#### 4. Cài đặt docker
```shell
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

#### 5. Khởi tạo docker swarm

Thay thế `localhost` bằng ip của net interface bạn sử dụng cho mạng nội bộ giữa các máy chủ
```shell
docker swarm init --advertise-addr localhost
```

#### 6. Cài đặt `docker-compose`

```shell
set unames (uname -s)
set unamem (uname -m)
# echo "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$unames-$unamem"
curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$unames-$unamem" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

#### 7. Khởi tạo thư mục chứa dữ liệu cho server
```shell
./script/prepair.bash
```

#### 8. Kiểm tra quá trình cài đặt các service (chạy lệnh này ở 1 cửa sổ terminal khác)
```shell
watch -n 1 docker service ls
```

#### 9. Cấu hình ban đầu
Sửa đường dẫn mount thư mục cho docker trong file `.envDeploy` nếu bạn thay đổi đường dẫn trong [bước 2](#2-tạo-thư-mục-chứa-bộ-cài-đặt-và-cấu-hình)
```shell
CONFIG_PATH=/opt/makiposiot/iot-server/config
```
Thay đổi domain thành domain của bạn
```shell
SERVICE_DOMAIN=localhost
WEB_DOMAIN=localhost
```
Thay đổi secretKey sử dụng cho JWT ([Bạn có thể sử dụng SHA 512-bit Key ngẫu nhiên tạo ở đây](http://keygen.io/))
```shell
MKP_authentication__secret=
```

#### 10. Deploy các service
```shell
./scriptdeploy/deploy.fish
```

```shell
ID             NAME                                    MODE         REPLICAS   IMAGE                            PORTS
0ttjoiinfoda   makiposiot-emqtt_emqtt                  replicated   1/1        makipos/emqtt:1.3.0
l4ynzxoyidmd   makiposiot-frontend_admin-makiposiot    replicated   1/1        makipos/admin-smarthome:latest
dov3uxxcuwfj   makiposiot-mongodb_mongodb              replicated   1/1        mongo:4.0
pi8gj9x5y70u   makiposiot-redis_redis                  replicated   1/1        redis:latest
mzzf4iewmzvh   makiposiot-redis_redis-cache            replicated   1/1        redis:latest
vszzg2fhjyi3   makiposiot-services_automatic-service   replicated   2/2        makipos/automatic-service:1
tu97vc22v7fh   makiposiot-services_devices-service     replicated   2/2        makipos/devices-service:1
8xx8ul8amvu3   makiposiot-services_files-service       replicated   1/1        makipos/files-service:1
glw1s1iziddm   makiposiot-services_relations-service   replicated   2/2        makipos/relations-service:1
9fai0op272r8   makiposiot-services_update-service      replicated   1/1        makipos/update-service:1
dfn50lsm08wj   makiposiot-services_users-service       replicated   2/2        makipos/users-service:1
3adm45etof05   makiposiot-ssh-server_ssh-server        replicated   1/1        makipos/ssh-server:1.3.0         *:2222->22/tcp
wuag6rcjtcem   makiposiot-traefik_traefik              replicated   1/1        traefik:1.7

```

#### 11. Nhập dữ liệu khởi tạo cho db

Bạn thay đổi mật khẩu khởi tạo của admin trong file `script/mongoshellcommand.js`.
Trường `password` là mã hóa SHA256 của `plainPassword`. ([sha256 encode online](https://emn178.github.io/online-tools/sha256.html))
```
db.users.insert({
   "username" : "admin",
   "password" : "",
   "plainPassword":"",
   "name" : "admin",
   "roles" : [
       "admin"
   ],
   "userSetting" : {},
   "googleAssistant" : false
 });
```

Chạy lệnh sau để insert dữ liệu tài khoản admin ban đầu vào database

```shell
./script/prepairdb.bash
```

#### 12. Tắt service ssh để tránh truy cập trái phép vào mạng nội bộ

```shell
./scriptdeploy/undeploySSH.bash
```

#### 13. Tunning system

#### 14. Deploy trang web quản trị

Mặc định cấu hình truy cập web quản trị là `localhost`

Chạy lệnh deploy
```shell
./scriptdeploy/deployFrontend.fish
```

## Nhập licensekey

Liên hệ với chúng tôi : http://makihome.vn/

Hoặc trực tiếp qua email : phuongtq@makipos.com

#### 1. Đăng nhập

Sau khi cài đặt bạn đã có thể truy cập vào trang web quản trị

Đăng nhập vào bằng tài khoản admin đã được khởi tạo trong db

#### 2. Nhập licenseKey

Click vào tên tài khoản ở góc trên bên phải trang quản trị. Chọn `Change lincense key`

Tại đây bạn nhập license key được chúng tôi cung cấp để mở khóa sử dụng hệ thống.
