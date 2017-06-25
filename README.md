# Tributary

A routing and transcoding platform for live video streaming. [Nginx](https://github.com/arut/nginx-rtmp-module) is used to receive RTMP streams and a Node.js server provides coordination and management capabilities.

At the moment the server component is a simple demonstration of the incoming events from nginx. In the future the server will provide the following functionality:

* Authentication & Authorisation (control who's allowed to publish and/or play)
* Routing of streams (spawning and commanding ffmpeg containers to receive the incoming stream, and re-stream to a destination)
* Backend to a UI front-end to configure the routing plane

## Getting Started

`git clone git@github.com:rosswilson/tributary.git`

`cd tributary`

`docker-compose up`

A docker image is built for each service and they're made available at the below URLs:

|Service|URL|
|-|-|
|nginx-rtmp|http://localhost:9101/stat|
|api-server|http://localhost:9102/status|

Publish to a test stream:

`ffmpeg -re -i big_buck_bunny.mp4 -c copy -an -f flv rtmp://127.0.0.1/live/test`

Then use VLC to play the stream: `rtmp://127.0.0.1/live/test`

Observe the server events that're received for connect, publish, play, and done events.
