#### Start application with docker

Run: docker-compose up

#### Prepare dependencies to start in local

docker run -d --name mindden-mongo -p 27017:27017 mongo

From frontend directory, run: yarn

From server directory, run: yarn

#### Start application from local

From frontend directory, run: yarn dev

From server directory, run: yarn ad:dev

From server directory, run: yarn auth:dev

From server directory, run: yarn gateway:dev

#### Database Migration

From "server" folder, run: yarn migrate:db
