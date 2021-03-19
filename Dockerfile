FROM node:alpine
WORKDIR /usr/app
COPY . .
RUN npm install
RUN npm run build

FROM node:alpine
WORKDIR /usr/app
COPY --from=0 /usr/app/dist .
COPY package.json package.json
RUN npm install --only=prod
CMD [ "npm", "start" ]