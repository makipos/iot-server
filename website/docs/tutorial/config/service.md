---
  title: Service
---

## Phân trang

Định nghĩa cấu hình phân trang các api tìm kiếm `find`
```
"paginate": {
  "default": 200,
  "max": 1000
}
```

- `default`: giới hạn trang mặc định
- `max` : giới hạn trang lớn nhất người dùng có thể tùy chỉnh thông qua param `$limit` trong truy vấn

## Log

```
"log2Console": true,
"logLevel": "debug",
"logPath": "/media/data/",
```

- `log2Console` : print log ra console terminal hay không
- `logLevel` : cấp độ log
- `logPath`: Folder chứa file log trong quá trình hoạt động (đường dẫn trong container)

## net_interface

**Không sử dụng**. Chỉ thay đổi khi chạy trực tiếp trên máy

## private_network

```
"private_network": {
  "addr": "10.200.0.0",
  "whiteList":[]
}
```

- `addr`: dải địa chỉ trong mạng nội bộ của các service
- `whiteList`: danh sách IP ngoại lệ ở ngoài mạng

## emqtt

```
"emqtt_server": {
  "httpApi": "http://emqtt:8080/api/v2",
  "httpClientApi": "http://emqtt:8080/api/v2/clients",
  "httpAuth": "admin:public",
  "addr": "mqtt://emqtt",
  "username": "users-service",
  "password": "mkp123456a@",
  "shareGroup": "users-service"
}
```
