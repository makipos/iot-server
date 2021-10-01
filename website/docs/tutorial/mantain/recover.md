---
  title: Sự cố
---

## Service không phản hồi

Thông thường service trong quá trình hoạt động có thể gặp tình trạng phản hồi chậm hoặc không phản hồi do lượng truy vấn tăng đột biến.

Các service đã được cài đặt cơ chế giám sát tự động thông qua health check của docker, sẽ được tự động khởi động lại khi phát hiện. Tuy nhiên trong một số trường hợp, cài đặt này không phản ứng lại kịp thời thì bạn có thể khởi động lại service bị treo bằng tay thông qua lệnh

```script
docker service update --force <Tên service>
```

Bạn có thể kiểm tra danh sách các service bằng lệnh

```script
docker service ls

ID             NAME                                           MODE         REPLICAS   IMAGE                                                               PORTS
2gx7wm3eyg6t   smarthome-emqtt_emqtt                          replicated   1/1        registry.makipos.net/smarthome/emqtt:1.3.0-p
75i9118b57q4   smarthome-frontend_admin-smarthome             replicated   1/1        registry.makipos.net/smarthome/admin-smarthome:1.20.16-p
73lk0xa58acx   smarthome-mongodb_mongodb                      replicated   1/1        makipos/mongodb:4.0
wc352vzbk0zz   smarthome-redis_redis                          replicated   1/1        redis:latest
je9gesg2v746   smarthome-redis_redis-cache                    replicated   1/1        redis:latest
ux57tiriyd1s   smarthome-services_active-connection-service   replicated   1/1        registry.makipos.net/smarthome/active-connection-service:1.3.14-p
q5y1h02r16sp   smarthome-services_automatic-service           replicated   2/2        registry.makipos.net/smarthome/automatic-service:1.15.1-p
62jnsj1nr8ss   smarthome-services_commercial-service          replicated   1/1        registry.makipos.net/smarthome/commercial-service:1.2.18-p
a8y21kc1qe3z   smarthome-services_devices-service             replicated   2/2        registry.makipos.net/smarthome/devices-service:1.20.18-p
d3dmucgi4jyd   smarthome-services_factory-service             replicated   1/1        registry.makipos.net/makipos/factory-service:1.7.7-p
fh4s13p3w95g   smarthome-services_files-service               replicated   1/1        registry.makipos.net/smarthome/files-service:1.2.3-p
1kjx9ofd8u5w   smarthome-services_relations-service           replicated   2/2        registry.makipos.net/smarthome/relations-service:1.12.7-p
8dmto5sm5sbv   smarthome-services_update-service              replicated   1/1        registry.makipos.net/smarthome/update-service:1.7.22-p
sm0nvubu7an5   smarthome-services_users-service               replicated   2/2        registry.makipos.net/smarthome/users-service:1.24.12-p
xavp05zkr8rq   smarthome-traefik_traefik                      replicated   1/1        registry.makipos.net/smarthome/traefik:1.2.1-p
```
