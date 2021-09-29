#!/usr/bin/fish

env (cat .envDeploy)  docker-compose -f docker-compose-redis.yml config > production-redis.yml

# --prune
docker stack rm makiposiot-redis
