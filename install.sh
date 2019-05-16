#!/usr/bin/fish

if [ (count $argv) = 0 ]
  #statements
  echo "You need pass ip interface in argument"
else
  apt-get update
  apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common sshpass
  ./script/prepairDocker.sh $argv
  ./script/prepair.sh

  ./scriptdeploy/deploy.sh
  ./script/prepairdb.sh
end
