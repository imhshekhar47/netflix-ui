FROM node:12.18.4-alpine3.9

LABEL author="imhshekhar47"

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

COPY package-lock.json ./

RUN npm i

COPY . ./

CMD ["npm", "start"]