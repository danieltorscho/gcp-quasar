# # Development stage
# FROM node:lts-alpine as develop
# WORKDIR /app
# COPY package*.json ./
# RUN yarn global add @quasar/cli
# COPY . .

# # Build stage
# FROM develop as build
# RUN yarn
# RUN quasar build

# # Production stage
# FROM nginx:1.17.5-alpine as production
# COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

FROM node:10

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["yarn", "dev:ssr"]
