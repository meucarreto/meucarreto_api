#!/bin/bash
cd /var/www/html/meucarreto_api
npm install --silent
chown -R ec2-user:apache /var/www/html/meucarreto_api/
pm2 start server/server.js --name back
exit 0