FROM node as builder

RUN mkdir /project
WORKDIR /project

RUN npm install -g @angular/cli@13

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider
CMD ["ng", "serve", "--host", "0.0.0.0"]