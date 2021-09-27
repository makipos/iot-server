#!/usr/bin/fish

docker network create --opt encrypted --attachable --driver=overlay --subnet=10.200.0.0/16 makiposiot-internal
docker network create --opt encrypted --attachable --driver=overlay --subnet=10.201.0.0/16 makiposiot-frontend
