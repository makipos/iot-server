#!/usr/bin/fish

set currentDIR (dirname (status filename))

eval $currentDIR/createNetwork.fish

eval $currentDIR/deployMongodb.fish
eval $currentDIR/deployRedis.fish
eval $currentDIR/deploySSH.fish
eval $currentDIR/deployServices.fish
eval $currentDIR/deployTraefik.fish
sleep 90
eval $currentDIR/deployEmqtt.fish
