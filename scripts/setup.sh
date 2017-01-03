#!/bin/bash
cd /var/www/html/meucarreto_api
npm install --silent
chown -R ec2-user:apache /var/www/html/meucarreto_api/
pm2 start sever/server.js --name back
pm2 start all
exit 0