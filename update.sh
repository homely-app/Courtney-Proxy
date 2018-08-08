#!/usr/bin/env bash

docker stop proxy
docker rm proxy
docker rmi -f airfec_marcellino_proxy
docker build . -t airfec_marcellino_proxy:latest