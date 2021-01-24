FROM node:12.18-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm i

COPY . .

RUN npm run build