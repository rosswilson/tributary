# Tributary

A routing and transcoding platform for live video streaming.

## Getting Started

`git clone git@github.com:rosswilson/tributary.git`

`cd tributary`

`docker-compose up`

A docker image is built for each service and they're made available at the below URLs:

|Service|URL|
|-|-|
|nginx-rtmp|http://localhost:9101/stat|
|api-server|http://localhost:9102/status|
|ui|http://localhost:9103/|
