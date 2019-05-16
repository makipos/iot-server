#!/usr/bin/fish

if [ (count $argv) = 0 ]
  #statements
  echo "You need pass ip interface in argument"
else
  apt-get update
  apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common

  curl -fsSL https://get.docker.com -o get-docker.sh
  sh get-docker.sh

  docker swarm init --advertise-addr $argv
end
