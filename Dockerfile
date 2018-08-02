FROM node:7.6-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

ENV PROXY_COMPONENT_MARCELLINO http://c2-13-57-204-61.us-west-1.compute.amazonaws.com
ENV PROXY_COMPONENT_NICK http://ec2-54-215-167-214.us-west-1.compute.amazonaws.com
# ENV PROXY_COMPONENT_RICKY 
# ENV PROXY_COMPONENT_OZGE 
ENV PORT 80

RUN npm install

EXPOSE 80

CMD [ "npm", "start" ]