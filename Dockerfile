FROM node:14.4.0-stretch-slim

ENV NPM_CONFIG_LOGLEVEL warn

ENV APP /usr/src/app

# Create app directory
RUN mkdir -p $APP
WORKDIR $APP

# Install app dependencies
COPY ./package.json $APP
COPY ./yarn.lock $APP
RUN yarn install

# Bundle app source
COPY . $APP

WORKDIR $APP

RUN npm run buildStatic

VOLUME $APP