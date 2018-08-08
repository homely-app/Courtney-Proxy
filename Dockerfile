FROM node:7.6-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

ENV PROXY_COMPONENT_MARCELLINO http://ec2-13-57-204-61.us-west-1.compute.amazonaws.com
ENV PROXY_COMPONENT_NICK http://ec2-54-215-167-214.us-west-1.compute.amazonaws.com
ENV PROXY_COMPONENT_RICKY http://ec2-54-183-152-199.us-west-1.compute.amazonaws.com
ENV PROXY_COMPONENT_OZGE http://ec2-18-220-233-85.us-east-2.compute.amazonaws.com

ENV PORT 3000

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]