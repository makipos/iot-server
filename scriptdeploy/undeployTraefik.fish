#!/usr/bin/fish

env (cat .envDeploy)  docker-compose -f docker-compose-traefik.yml config > production-traefik.yml

# --prune
docker stack rm makiposiot-traefik
