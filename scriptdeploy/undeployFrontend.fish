#!/usr/bin/fish

env (cat .envFrontendDeploy)  docker-compose -f docker-compose-frontend.yml config > production-frontend.yml

# --prune
docker stack rm makiposiot-frontend
