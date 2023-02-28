## To build docker image
docker build -t node-app:1.0.0 .

## To list docker images
docker images

## To run docker containers
docker run -d -p 3030:3030 node-app:1.0.0

## To list docker containers
docker ps

## To Get nodehelloworld logs
docker logs node-app:1.0.0

## To Stop nodehelloworld
docker stop node-app:1.0.0

## To Start nodehelloworld
docker start node-app:1.0.0

## To Remove Container
docker rm node-app:1.0.0

