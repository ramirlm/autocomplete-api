FROM node:12.2.0-alpine
RUN mkdir -p /srv/server
WORKDIR /srv/server
COPY package.json /srv/server
RUN npm install --only=production
RUN npx sequelize-cli db:migrate
COPY . /srv/server
EXPOSE 3000
CMD [ "npm", "start" ]
