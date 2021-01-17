# anything that can run/serve ReactJS
FROM debian:stretch

WORKDIR /usr/src/bitsky/desktop

# upgrade & update
RUN apt-get update && apt-get -y upgrade

# node
RUN apt-get -y install curl software-properties-common
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get -y install nodejs

# yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update
RUN apt-get -y install yarn

# copy content
COPY . .

# install dependencies
RUN yarn

# build & serve app
RUN yarn react-build
RUN npm install -g serve
CMD serve -s build

# add metadata port
EXPOSE 5000
