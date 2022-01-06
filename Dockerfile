FROM node:16.13.1-alpine

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

EXPOSE 4000


CMD ["npm", "run", "start:dev"]



