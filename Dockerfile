FROM node:16.13.1-alpine as base

FROM base as build
WORKDIR /build
COPY package*.json ./
RUN npm install && npm cache clean --force && npm cache clean --force
COPY . .
RUN npm run build && npm prune --production

FROM base
WORKDIR /app
COPY --from=build /build/ ./
CMD ["npm", "run", "start:dev"]
