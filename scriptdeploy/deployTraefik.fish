#!/usr/bin/fish

env (cat .envDeploy)  docker-compose -f docker-compose-traefik.yml config > production-traefik.yml

# --prune
docker stack deploy --compose-file production-traefik.yml --with-registry-auth makiposiot-traefik
