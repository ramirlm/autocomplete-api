FROM node:12.2.0-alpine

# Creating the app directory on the container and setting as working directory
RUN mkdir -p /srv/server
WORKDIR /srv/server

COPY package.json /srv/server

RUN npm install

COPY . /srv/server

CMD [ "npm", "run", "dev" ]
