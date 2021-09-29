#!/usr/bin/fish

env (cat .envDeploy)  docker-compose -f docker-compose-ssh-server.yml config > production-ssh-server.yml

# --prune
docker stack rm makiposiot-ssh-server
