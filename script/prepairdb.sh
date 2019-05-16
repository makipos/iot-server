#!/bin/bash

sshpass -p MKP123456a@ ssh -o "StrictHostKeyChecking no" root@localhost -p 2222 "mongo --host mongodb << $(cat script/mongoshellcommand.js)"
