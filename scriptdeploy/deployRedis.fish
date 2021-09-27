#!/usr/bin/fish

env (cat .envDeploy)  docker-compose -f docker-compose-redis.yml config > production-redis.yml

# --prune
docker stack deploy --compose-file production-redis.yml --with-registry-auth makiposiot-redis
