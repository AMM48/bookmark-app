# ---- Base Node ----
FROM node:19.4.0-alpine3.17 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:19.4.0-alpine3.17
WORKDIR /app

COPY --from=builder /app/build /app/build

RUN npm install -g serve && \
    chown -R 1000:1000 /app

USER 1000

EXPOSE 80
CMD ["serve", "-s", "build"]