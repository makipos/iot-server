---
  title: SSL
---

Có 3 giao diện kết nối cho phép cấu hình SSL

## emqtt

Sừ dụng cho port 8084 (wss) và 8883 (mqtt ssl)

Copy file `cacert.pem` vào thư mục `config/emqtt/certs`

Cấu hình này được xác định trong file `docker-compose-emqtt.yml`

```
- EMQ_LISTENER__SSL__EXTERNAL__CACERTFILE=/opt/emqttd/etc/certs/cacert.pem
- EMQ_LISTENER__WSS__EXTERNAL__CACERTFILE=/opt/emqttd/etc/certs/cacert.pem
```

## service api ssl

Cấu hình SSL cho API service (https)

Copy file `server_pro.crt` và `server_pro.key` vào trong thư mục `config/traefik/cert`

Trong file `config/traefik/traefik.toml` tìm và bỏ chú thích đoạn :
```
# [entryPoints.https]
# address = ":3029"
#   [entryPoints.https.tls]
#     [[entryPoints.https.tls.certificates]]
#     CertFile = "/etc/traefik/cert/server_pro.crt"
#     KeyFile = "/etc/traefik/cert/server_pro.key"
```

## https cho web service

Có thể cài đặt cert tương tự như đối với api service, hoặc có thể cấu hình free ssl [letsencrypt](https://letsencrypt.org/) theo hướng dẫn tại [đây](https://doc.traefik.io/traefik/v1.7/configuration/acme/)
