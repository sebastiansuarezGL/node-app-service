FROM node:alpine
WORKDIR /usr/app
COPY package.json .
ENV NODE_ENV=development
RUN npm install
COPY tsconfig.json .
COPY src src
COPY bin bin
RUN npm run build

FROM node:alpine
WORKDIR /usr/app
COPY --from=0 /usr/app/dist .
COPY package.json package.json
RUN npm install --only=prod
EXPOSE 1337
CMD [ "npm", "start" ]