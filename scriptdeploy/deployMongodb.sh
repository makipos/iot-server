#!/usr/bin/fish

env (cat .envDeploy)  docker-compose -f docker-compose-mongodb.yml config > production-mongodb.yml

# --prune
docker stack deploy --compose-file production-mongodb.yml --with-registry-auth makiposiot-mongodb
