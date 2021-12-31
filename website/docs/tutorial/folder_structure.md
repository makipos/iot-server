---
id: folder_structure
title: Cấu trúc thư mục
---


## Cấu trúc thư mục cài đặt clone từ [github](https://github.com/makipos/iot-server)

```
.
├── config                    -- folder chứa các file config
│   ├── automatic-service     -- file config cho service
│   ├── devices-service       -- file config cho service
│   ├── emqtt                 -- Chứa file cert cho service emqtt
│   ├── files-service         -- file config cho service
│   ├── rc.local              -- file cấu hình cho hệ thống linux
│   ├── relations-service     -- file config cho service
│   ├── sysctl.conf           -- file cấu hình cho hệ thống linux
│   ├── tcp-gateway           -- file config cho service
│   ├── traefik               -- file cert và config cho traefik gateway service
│   ├── update-service        -- file config cho service
│   ├── users-service         -- file config cho service
│   └── *****-service         -- file config cho các service khác nếu bổ sung
├── docker-compose-emqtt.yml
├── docker-compose-frontend.yml
├── docker-compose-mongodb.yml
├── docker-compose-redis.yml
├── docker-compose-services.yml
├── docker-compose-ssh-server.yml
├── docker-compose-traefik.yml
├── install.fish                -- file script cài đặt tổng hợp
├── production-*.yml            -- Các file tạm được sinh ra trong quá trình cài đặt
├── README.md
├── script
│   ├── mongoshellcommand.js    -- script chứa lệnh khởi tạo database
│   ├── prepair.bash            -- script khởi tạo cấu trúc thư mục chứa dữ liệu
│   ├── prepairdb.bash          -- script khởi tạo database
│   └── prepairDocker.fish      -- script cài đặt, khởi tạo docker
├── scriptdeploy
│   ├── createNetwork.fish      -- script khởi tạo virtual network cho các docker service
│   ├── deployEmqtt.fish
│   ├── deploy.fish             -- script deploy tổng hợp
│   ├── deployFrontend.fish     -- script deploy webadmin
│   ├── deployMongodb.fish
│   ├── deployRedis.fish
│   ├── deployServices.fish     -- script deploy service
│   ├── deploySSH.fish
│   ├── deployTraefik.fish
│   ├── uncreateNetwork.fish    -- script xóa virtual network
│   ├── undeployEmqtt.fish
│   ├── undeployFrontend.fish
│   ├── undeployMongodb.fish
│   ├── undeployRedis.fish
│   ├── undeployServices.fish
│   ├── undeploySSH.fish        -- script xóa SSH service
│   └── undeployTraefik.fish
└── website                     -- folder website hướng dẫn
```

***Các folder trong thư mục `config` được mount vào service tương ứng. Cấu hình này được thiết lập trong `docker-compose` file tương ứng***

## Cấu trúc thư mục chứa dữ liệu

Mặc định được khởi tạo bởi script `prepair.bash` tới thư mục `/media/Programs/Programs_data/`

***Các folder này được mount vào các service tương ứng. Cấu hình này được thiết lập trong `docker-compose` file tương ứng***

```
.
└── makiposiot
    ├── automatic_service
    │   └── logs
    ├── devices_service
    │   └── logs
    ├── files_service
    │   ├── files             -- folder chứa file đc tải lên server (truy cập tự do nếu có url)
    │   ├── files_secure      -- folder chứa file đc tải lên server (đc bảo mật giới hạn truy cập)
    │   └── logs
    ├── mongodb               -- folder chứa dữ liệu của mongodb database
    ├── redis                 -- folder chứa dữ liệu của redis
    ├── redis_cache           -- folder chứa dữ liệu của redis cache
    ├── relations_service
    │   └── logs
    ├── update_service
    │   ├── logs
    │   └── release-device    -- folder chứa file cập nhật ota của device
    └── users_service
        └── logs
```

## Cấu trúc thư mục trong service container

Bao gồm các service `users_service` `devices_service` `automatic_service` `relations_service` `update_service` `files_service`

```
/
└──usr
│   └── src
│       └── app
│           ├── app.bin                 -- file chương trình
│           ├── config                  -- folder cấu hình (mặc định được mount tới folder config nằm ở ngoài)
│           │   ├── default.json
│           │   └── productionpkg.json
│           ├── native.node
│           └── public                  -- folder public, hiện tại không sử dụng
│               ├── docs.html
│               ├── favicon.ico
│               └── index.html
└──media
    └── data                            -- folder dữ liệu (mặc định được mount tới folder nằm ở ngoài)
       └── logs                         -- folder log (mặc định được mount tới folder nằm ở ngoài)

```
