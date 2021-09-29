#!/usr/bin/fish

env (cat .envDeploy)  docker-compose -f docker-compose-services.yml config > production-services.yml

# --prune
docker stack rm makiposiot-services
