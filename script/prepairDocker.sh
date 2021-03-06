#!/usr/bin/fish

if [ (count $argv) = 0 ]
  #statements
  echo "You need pass ip interface in argument"
else    
  curl -fsSL https://get.docker.com -o get-docker.sh
  sh get-docker.sh

  docker swarm init --advertise-addr $argv
  set unames (uname -s)
  set unamem (uname -m)
  # echo "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$unames-$unamem"
  curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$unames-$unamem" -o /usr/local/bin/docker-compose
  chmod +x /usr/local/bin/docker-compose
end
