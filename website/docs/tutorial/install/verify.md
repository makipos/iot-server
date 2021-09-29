---
title: "Kiểm tra"
---

1. Kiểm tra hoạt động của các service

```shell
watch -n 1 docker service ls
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
