---
title: Tổng quát
---

Các service trong hệ thống được cấu hình độc lập.

## Cấu hình service logic

Đối với các service logic `users_service` `devices_service` `automatic_service` `relations_service` `update_service` `files_service`. Có 2 cách để cấu hình tham số

### Cấu hình thông qua file `.json` config

[Folder config trong mỗi service container](http://localhost:3000/iot-server/docs/tutorial/folder_structure#c%E1%BA%A5u-tr%C3%BAc-th%C6%B0-m%E1%BB%A5c-trong-service-container) được mặc định mount tới [folder config ở ngoài](/docs/tutorial/folder_structure#cấu-trúc-thư-mục-cài-đặt-clone-từ-github).

Folder config mặc định bao gồm
```
.
├── default.json        -- file cấu hình nền (mặc định).
└── productionpkg.json  -- file cấu hình tùy thuộc vào biến môi trường `NODE_ENV`, ghi đè lên file cấu hình mặc định.
```

Các cấu hình trong file json có dạng json Object:
```json
"paginate": {
  "default": 200,
  "max": 1000
}
```

### Cấu hình thông qua biến môi trường `docker-compose` file

Trong cấu hình cho mỗi container trong file `docker-compose-services.yml`, biến môi trường trong container có thể được cấu hình thông qua thuộc tính `environment` ([link tham khảo](https://docs.docker.com/compose/compose-file/compose-file-v3/#environment)) và [sử dụng biến môi trường trong docker-compose.yml](https://docs.docker.com/compose/environment-variables/)

```
environment:
  - NODE_ENV=productionpkg
  - MKPS_paginate__default=100
  - MKPS_paginate__max=1000
```

Biến môi trường có ***cấu trúc*** tên cụ thể sẽ được ghi đè giá trị lên giá trị trong các file config.

Tên biến môi trường dành cho ghi đè config có cấu tiền tố `MKPS_`, theo sau là tên trường. Đối với nested Object, dấu `.` trong json Object sẽ được thể hiện bằng 2 dấu gạch dưới `__`

Ví dụ: nếu bạn muốn ghi đè cấu hình `paginate.default` trong json config file. Tên biến môi trường tương ứng sẽ là `MKPS_paginate__default`

Các tham số cấu hình sẽ được tải lên khi service khởi chạy.

***Một số cấu hình chung cho các service được chúng tôi đặt sẵn chung cho mọi service thông qua file `.envDeploy`. Các biến môi trường này đầu tiên sẽ được sử dụng cùng với file docker-compose để sinh ra file yml tạm `production-.yml`***

## Cấu hình service web

Một số cấu hình cho web service thông qua biến môi trường được đặt trong file `docker-compose-frontend.yml`

## Cấu hình các service khác

Các service khác như [emqtt](https://docs.emqx.io/en/broker/v2.0/) [mongodb](https://hub.docker.com/_/mongo) [redis](https://hub.docker.com/_/redis) [traefik](https://doc.traefik.io/traefik/v1.7/) sử dụng cách cấu hình tương ứng theo từng service. Có thẻ tham khảo tại trang thông tin của từng service
