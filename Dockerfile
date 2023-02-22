# FROM is used to define the base image to start the build process. Every Dockerfile must start with the FROM instruction. The idea behind this is that you need a starting point to build your image.
FROM node:12.4
# WORKDIR tells Docker that the rest of the commands will be run in the context of the /app folder inside the image.
WORKDIR /app
# Add our sourcecode
ADD . /app
# The command to start our container. In this case, it's the app that we created which is server.js
CMD node server.js
