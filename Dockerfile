FROM node:16.13.1-alpine as base

FROM base as build
WORKDIR /build
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build && npm prune --production

FROM base
WORKDIR /app
COPY package*.json ./
COPY --from=build /build/node_modules ./node_modules
COPY --from=build /build/build ./build
COPY --from=build /build/.env ./

CMD ["npm", "run", "start"]

