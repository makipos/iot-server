#!/usr/bin/fish

env (cat .envDeploy)  docker-compose -f docker-compose-frontend.yml config > production-frontend.yml

# --prune
docker stack deploy --compose-file production-frontend.yml --with-registry-auth makiposiot-frontend
