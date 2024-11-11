# Dockerfile
FROM cr.yandex/crpar70vkred5ldbiefb/node:16-alpine

# create destination directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/app/
RUN npm install
RUN npm run build-stage3

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

#CMD [ "npm", "run", "start-stage3" ]
