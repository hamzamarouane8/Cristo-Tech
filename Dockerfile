FROM node:12 AS builder

RUN mkdir /usr/src/lerna-repo
WORKDIR /usr/src/lerna-repo

COPY package.json /usr/src/lerna-repo/package.json 

RUN yarn install && yarn build && lerna bootstrap


FROM node:12
WORKDIR /app
COPY --from=builder . /usr/src/lerna-repo
RUN cd lerna-repo/app 

CMD ["yarn", "start"]