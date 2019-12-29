FROM node:11.1.0-alpine as node_base

FROM node_base as parcel_base
RUN npm install -g parcel --silent

FROM parcel_base as deps
WORKDIR /usr/app
COPY package*.json /usr/app/
# be careful with this line
RUN npm install --silent 

FROM parcel_base as build
WORKDIR /usr/app
COPY --from=deps /usr/app/node_modules /usr/app/node_modules
COPY . /usr/app
RUN npm run build

FROM scratch AS ui
COPY --from=build /usr/app/dist /usr/app