---
title: Kiến trúc
sidebar_label: Tổng quan
---

<!-- Check the [documentation](https://docusaurus.io) for how to use Docusaurus. -->

## Tổng quan

Mô hình Microservice sử dụng docker swarm cho phép kiến trúc server hoạt động theo cluster, giúp khả năng mở rộng linh hoạt, đáp ứng nhu cầu chịu tải cao và mở rộng tính năng

![](https://makihome.vn/wp-content/uploads/2020/01/service_network.svg "kiến trúc")

## Firewall

Cụm server đặt trong mạng nội bộ đứng sau firewall, chỉ cho phép dữ liệu tới các cổng dịch vụ cho phép
1. 80, 443 : Cổng dịch vụ của web quản trị
2. 22: Cổng kết nối ssh
3. 2222: Cổng kết nối tới ssh mạng riêng ảo
4. 3020: Cổng kết nối cho thiết bị sử dụng giao thức tcp socket
5. 3028, 3029: Cổng dịch vụ api http
6. 1883, 8083, 8883, 8084: Cổng dịch cho kết nối mqtt (mqtt, ws, mqttssl, wss)

## Frontend

Nhóm service chứa trang web quản trị và traefik loadbalance với mạng riêng độc lập với mạng nội bộ của các service xử lý dịch vụ

## API Service

Nhóm service bao gồm cơ sở dữ liệu, mqtt broker, API service hoạt động trong mạng riêng (overlay network của docker swarm)

Mỗi một service là một docker container, có thể chưa nhiều endpoint API có cùng chức năng

## Giao thức kết nối

Makipos iot platform cung cấp nhiều giao diện API cho phép thiết bị và người dùng (mobile app, web) kết nối. Có thể bổ sung thêm bằng cách xây dựng service gateway tương ứng.

1. HTTP (HTTPS)
2. MQTT
3. TCP
4. SMS : Do đặc thù của kết nối sms, server sms gateway được đặt tại 1 máy trạm nội bộ riêng có sử dụng SIM module. Các kết nối, giao tiếp sử dụng giao thức này được thực hiện trung gian qua server độc lập này sử dụng (API, webhook)
