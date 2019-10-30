

# Hướng dẫn cài đặt

Quá trình cài đặt sử dụng quyền root của hệ thống

1. Cài đặt công cụ

```shell
apt-get update
apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common sshpass fish sh bash git curl watch
```

3. Các lệnh này sử dụng fish shell, active fish shell bằng lệnh
```shell
fish
```

2. Tạo thư mục chứa bộ cài đặt và cấu hình

```shell
cd /opt
mkdir makiposiot
cd makiposiot
```

3. clone bộ cài đặt từ github
```shell
git clone https://github.com/makipos/iot-server.git
cd iot-server
chmod -R +x script
chmod -R +x scriptdeploy
chmod +x install.sh
```

4. Cài đặt docker
```shell
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

5. Khởi tạo docker swarm

Thay thế `localhost` bằng ip của net interface bạn sử dụng cho mạng nội bộ giữa các máy chủ
```shell
docker swarm init --advertise-addr localhost
```

6. Cài đặt `docker-compose`

```shell
set unames (uname -s)
set unamem (uname -m)
# echo "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$unames-$unamem"
curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$unames-$unamem" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

7. Khởi tạo thư mục chứa dữ liệu cho server
```shell
./script/prepair.sh
```

8.Kiểm tra quá trình cài đặt các service (chạy lệnh này ở 1 cửa sổ terminal khác)
```shell
watch -n 1 docker service ls
```

9. Deploy các service
```shell
./scriptdeploy/deploy.sh
```

```shell
ID                  NAME                                    MODE                REPLICAS            IMAGE                             PORTS
dl26wa8pdfo4        makiposiot-emqtt_emqtt                  replicated          1/1                 makipos/emqtt:1.2.3
wegouhqjicbo        makiposiot-mongodb_mongodb              replicated          1/1                 mongo:4.0
adtsmho42p8c        makiposiot-redis_redis                  replicated          1/1                 redis:alpine
qlecvm774d0w        makiposiot-redis_redis-cache            replicated          1/1                 redis:alpine
i8wmjwltymdm        makiposiot-services_automatic-service   replicated          2/2                 makipos/automatic-service:1.9.0
dms83rntop4b        makiposiot-services_devices-service     replicated          2/2                 makipos/devices-service:1.14.1
tv55cooabbd3        makiposiot-services_relations-service   replicated          1/1                 makipos/relations-service:1.8.2
6zwpq2kjuclq        makiposiot-services_update-service      replicated          1/1                 makipos/update-service:1.7.0
wx3vi7qup1ty        makiposiot-services_users-service       replicated          2/2                 makipos/users-service:1.15.2
hz4dmfxvwej4        makiposiot-ssh-server_ssh-server        replicated          1/1                 makipos/ssh-server:1.2.1          *:2222->22/tcp
o4z35tzjby9g        makiposiot-traefik_traefik              replicated          1/1                 traefik:1.7

```

10. Nhập dữ liệu khởi tạo cho db

Bạn có thể thay đổi mật khẩu khởi tạo của admin trong file `script/mongoshellcommand.js`
`password` là mã hóa SHA256 của `plainPassword`

```shell
./script/prepairdb.sh
```

11. Deploy trang web quản trị

Mặc định cấu hình truy cập web quản trị là `localhost`

Sửa lại domain trong file `config/traefik-frontend/traefik.toml` dòng
```toml
[frontends.admin-makiposiot.routes.route_1]
rule = "Host:localhost"
```
Và file `docker-compose-frontend.yml`
```yml
- REACT_APP_SERVER_ADDR=http://localhost:3028
- REACT_APP_MQTT_SERVER_ADDR=ws://localhost:8083/mqtt
```

Sửa đường dẫn mount thư mục cho docker nếu bạn thay đổi đường dẫn trong `bước 2`
```yml
volumes:
  - /opt/makiposiot/config/traefik-frontend:/etc/traefik:ro
```
Cuối cùng chạy lệnh deploy
```shell
./script/prepairdb.sh
```

# Nhập licensekey

1. Đăng nhập

Sau khi cài đặt bạn đã có thể truy cập vào trang web quản trị

Đăng nhập vào bằng tài khoản admin đã được khởi tạo trong db

2. Nhập licenseKey

Click vào tên tài khoản ở góc trên bên phải trang quản trị. Chọn `Change lincense key`

Tại đây bạn nhập license key được chúng tôi cung cấp để mở khóa sử dụng hệ thống.
