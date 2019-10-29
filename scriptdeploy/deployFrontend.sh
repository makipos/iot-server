#!/usr/bin/fish

eval (docker-machine env mkp-ocean)

env (cat .envPro) env (cat .envFrontendDeploy)  docker-compose -f docker-compose-frontend.yml -f docker-compose-frontend-production.yml config > production-frontend-dep.yml

# --prune
docker stack deploy --compose-file production-frontend-dep.yml --with-registry-auth makiposiot-frontend
