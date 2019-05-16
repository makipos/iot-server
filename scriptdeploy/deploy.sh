#!/usr/bin/fish

./scriptdeploy/createNetwork.sh

./scriptdeploy/deployMongodb.sh
./scriptdeploy/deployRedis.sh
./scriptdeploy/deploySSH.sh
./scriptdeploy/deployServices.sh
./scriptdeploy/deployTraefik.sh
sleep 60
./scriptdeploy/deployEmqtt.sh
