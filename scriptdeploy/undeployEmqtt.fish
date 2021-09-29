#!/usr/bin/fish

env (cat .envDeploy)  docker-compose -f docker-compose-emqtt.yml config > production-emqtt.yml

# --prune
docker stack rm makiposiot-emqtt
