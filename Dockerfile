FROM node:16.13.1-alpine as base

# Build layer
FROM base as build
WORKDIR /build
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build && npm prune --production

# Release layer
FROM base
WORKDIR /app
COPY package*.json ./
COPY --from=build /build/node_modules ./node_modules
COPY --from=build /build/build ./build
COPY --from=build /build/.env ./
# EXPOSE 4000
CMD ["npm", "run", "start"]




# FROM node:16.13.1-alpine AS base

# FROM base AS dependencies
# WORKDIR /user
# COPY package*.json ./
# RUN npm install
# COPY . . 
# RUN npm run build && npm prune --poduction

# FROM base
# WORKDIR /app
# COPY package*.json ./
# COPY --from=dependencies /user/node_modules ./node_modules
# COPY --from=dependencies /user/build ./build
# COPY --from=dependencies /user/.env ./

# CMD ["npm", "run", "start:docker"]





# FROM node:16.13.1-alpine

# WORKDIR /app

# COPY package*.json /app

# RUN npm install && npm cache clean --force

# COPY . .

# EXPOSE 4000

# CMD ["npm", "run", "start:dev"]



