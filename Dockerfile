# FROM node:16.13.1-alpine as base

# FROM base as build
# WORKDIR /build
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build && npm prune --production && npm cache clean --force

# FROM base
# WORKDIR /app
# COPY package*.json ./
# # COPY --from=build /build/node_modules ./node_modules
# # COPY --from=build /build/build ./build
# # COPY --from=build /build/.env ./
# # COPY --from=build /build/nodemon.json ./
# # COPY --from=build /build/src ./src

# COPY --from=build /build ./
# CMD ["npm", "run", "start:dev"]



FROM node:16.13.1-alpine as base

# Build layer
FROM base as build
WORKDIR /build
COPY package*.json ./
RUN npm install && npm cache clean --force
COPY . .
RUN npm run build && npm prune --production

# Release layer
FROM base
WORKDIR /app
COPY --from=build /build/ ./
CMD ["npm", "run", "start:dev"]







