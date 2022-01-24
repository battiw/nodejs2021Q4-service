FROM node:16.13.1-alpine as base

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
CMD [ "npm", "run", "start:dev" ]