#!/usr/bin/fish

env (cat .envDeploy)  docker-compose -f docker-compose-emqtt.yml config > production-emqtt.yml

# --prune
docker stack deploy --compose-file production-emqtt.yml --with-registry-auth makiposiot-emqtt
