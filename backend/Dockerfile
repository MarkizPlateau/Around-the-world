FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps

WORKDIR /app/backend

EXPOSE 1337

CMD ["npm", "run", "develop"]
