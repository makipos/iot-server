#!/bin/bash

apt-get update
apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common

curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

docker swarm init
