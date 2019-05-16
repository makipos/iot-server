#!/usr/bin/fish

if [ (count $argv) = 0 ]
  #statements
  echo "You need pass ip interface in argument"
else
  ./script/prepairDocker.sh $argv
  ./script/prepair.sh

  ./scriptdeploy/deploy.sh
  ./script/prepairdb.sh
end
