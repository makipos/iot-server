#!/bin/bash

chmod 600 config/traefik/acme/acme.json

mkdir -p /media/Programs/Programs_data/makiposiot/mongodb
mkdir -p /media/Programs/Programs_data/makiposiot/redis
mkdir -p /media/Programs/Programs_data/makiposiot/redis_cache

mkdir -p /media/Programs/Programs_data/makiposiot/update_service/logs
mkdir -p /media/Programs/Programs_data/makiposiot/update_service/release
mkdir -p /media/Programs/Programs_data/makiposiot/update_service/release-device
mkdir -p /media/Programs/Programs_data/makiposiot/devices_service/logs
mkdir -p /media/Programs/Programs_data/makiposiot/automatic_service/logs
mkdir -p /media/Programs/Programs_data/makiposiot/relations_service/logs
mkdir -p /media/Programs/Programs_data/makiposiot/users_service/logs
mkdir -p /media/Programs/Programs_data/makiposiot/files_service/logs
mkdir -p /media/Programs/Programs_data/makiposiot/files_service/files
mkdir -p /media/Programs/Programs_data/makiposiot/files_service/files_secure
