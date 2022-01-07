FROM node:gallium AS base
WORKDIR /app

FROM base AS dependencies
COPY package*.json ./
RUN npm install && npm cache clean --force

# FROM dependencies AS build
# WORKDIR /app
# COPY src /app
# RUN npm run build

FROM node:16.13.1-alpine AS release
WORKDIR /app
COPY --from=dependencies /app/package*.json ./

# RUN npm install --only=production
# COPY --from=build /app ./

EXPOSE 4000

CMD ["npm", "run", "start:dev"]





# FROM node:16.13.1-alpine

# WORKDIR /app

# COPY package*.json /app

# RUN npm install && npm cache clean --force

# COPY . .

# EXPOSE 4000

# CMD ["npm", "run", "start:dev"]



