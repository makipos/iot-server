#!/bin/bash

sshpass -p MKP123456a@ ssh -o "StrictHostKeyChecking no" root@127.0.0.1 -p 2222 "mongo --host mongodb << $(cat script/mongoshellcommand.js)"
