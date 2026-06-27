FROM docker.io/library/node:24-alpine

WORKDIR /app
RUN corepack enable
COPY package.json package-lock.json ./
RUN npm install

ENTRYPOINT sh
