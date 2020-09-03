FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./
RUN yarn install --pure-lockfile --non-interactive --production

COPY . .

CMD [ "yarn", "start" ]