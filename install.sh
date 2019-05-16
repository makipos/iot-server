#!/usr/bin/fish

./script/prepairDocker.sh
./script/prepair.sh

./scriptdeploy/deploy.sh
./script/prepairdb.sh
