#!/bin/bash

apt-get update
apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
apt-key fingerprint 0EBFCD88

apt-get update
apt-get install docker-ce docker-ce-cli containerd.io

docker swarm init
