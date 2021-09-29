#!/usr/bin/fish

if [ (count $argv) = 0 ]
  #statements
  echo "You need pass ip interface in argument to init docker swarm"
else
  apt-get update
  apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common sshpass fish sh bash
  ./script/prepairDocker.fish $argv
  ./script/prepair.bash

  ./scriptdeploy/deploy.fish
  ./script/prepairdb.bash

  ./scriptdeploy/deployFrontend.fish
end
