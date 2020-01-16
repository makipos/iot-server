---
title: Kiểm tra
---

1. Kiểm tra hoạt động của các service

```shell
watch -n 1 docker service ls
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
