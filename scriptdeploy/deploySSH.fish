#!/usr/bin/fish

env (cat .envDeploy)  docker-compose -f docker-compose-ssh-server.yml config > production-ssh-server.yml

# --prune
docker stack deploy --compose-file production-ssh-server.yml --with-registry-auth makiposiot-ssh-server
