---
  title: Service
---

## Phân trang
`users-service` `devices-service` `relations-service` `automatic-service` `update-service` `files-service`

Định nghĩa cấu hình phân trang các api tìm kiếm `find`
```json
"paginate": {
  "default": 200,
  "max": 1000
}
```

- `default`: giới hạn trang mặc định
- `max` : giới hạn trang lớn nhất người dùng có thể tùy chỉnh thông qua param `$limit` trong truy vấn

## Log
`users-service` `devices-service` `relations-service` `automatic-service` `update-service` `files-service`

```json
"log2Console": true,
"logLevel": "debug",
"logPath": "/media/data/",
```

- `log2Console` : print log ra console terminal hay không
- `logLevel` : cấp độ log
- `logPath`: Folder chứa file log trong quá trình hoạt động (đường dẫn trong container)

## net_interface
`users-service` `devices-service` `relations-service` `automatic-service` `update-service` `files-service`

**Không sử dụng**. Chỉ thay đổi khi chạy trực tiếp trên máy

## private_network

`users-service` `devices-service` `relations-service` `automatic-service` `update-service` `files-service`

```json
"private_network": {
  "addr": "10.200.0.0",
  "whiteList":[]
}
```

- `addr`: dải địa chỉ trong mạng nội bộ của các service
- `whiteList`: danh sách IP ngoại lệ ở ngoài mạng

## Giới hạn số lượng dữ liệu cho user

```json
"limit": {
  "schema": 100
}
```
- `schema` : giới hạn số lượng kịch bản có thể tạo của mỗi user  `users-service`
- `rule`   : giới hạn số lượng luật tự động có thể tạo của mỗi user `automatic-service`
- `scheduleGroup`   : giới hạn số hẹn giờ có thể tạo của mỗi user `devices-service`

## Firebase notify
`users-service`

```json
"firebase": {
  "serviceAccountKey": "",
  "databaseURL": ""
}
```
- `serviceAccountKey` : Đường dẫn tương đối trỏ tới file json (đặt trong cùng folder)
- `databaseURL` : đường dẫn tới firebase url

 Ví dụ :
 ```json
 "firebase":{
    "serviceAccountKey":"../config/smarthome-f859f-firebase-adminsdk-05in8-5a2957635b.json",
    "databaseURL":"https://smarthome-f859f.firebaseio.com"
  },
 ```

## Liên kết google assitant
`users-service` `devices-service` `relations-service`

```json
"googleApikey": "",
"googleClientId": "",
"googleClientSecret": "",
"googleApi": {
  "serviceAccountKey": ""
},
```

Ví dụ :
```json
"googleApikey":"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
"googleClientId":"xxxxxxxxxxxxxxxx",
"googleClientSecret":"xxxxxxxxxxxxxxxx",
"googleApi":{
  "serviceAccountKey":"../config/Makipos Smarthome-xxxxxxxxx.json"
},
```

## Liên kết maika assistant
`users-service` `devices-service` `relations-service`

```json
"maikaClientId":"",
"maikaClientSecret":"",
"maikaHomeGraphKey":"",
"maikaHomeGraphUrl":"https://staging.actions-api.iviet.com/v1/devices",
```

## Open weather map api
`users-service`

Sử dụng để lấy thời tiết theo vị trí.

```json
"openweatherapiKey": "",
```

## Slack notify
`users-service` `devices-service` `relations-service` `automatic-service` `update-service` `files-service`

Cấu hình slack notify để thông báo trạng thái hoạt động của service qua kênh slack. Thông báo lỗi, thông báo khởi động

```json
"slack":{
  "token":"",
  "conversationId":""
},
```

## Mail
`devices-service`

Cấu hình Email sử dụng cho chức năng tự động gửi email cảnh báo hệ thống tới cho người vận hành hệ thống.

```json
"mail":{
  "host":"",
  "port":465,
  "secure":true,
  "user":"",
  "pass":""
},
```

## OTP (SMS service)
`users-service`

Cấu hình FTP API sử dụng cho chức năng đăng nhập sử dụng OTP

```json
"fpt":{
  "clientId":"",
  "clientSecret":"",
  "brandName":""
}
```
