FROM raspbian/stretch

WORKDIR /usr/src/bitsky/api

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
RUN apt-get install -y build-essential python
RUN yarn add bcrypt

# copy content
COPY . .

# install dependencies
RUN yarn

# add metadata port
EXPOSE 5030
CMD [ "yarn", "start" ]