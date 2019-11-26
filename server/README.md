# Book-Fetch API
A Node.JS API to provide the creation and querying of books.

### Features
- The Book Query searches for any of the Book's fields.
- The result of books is limited to 10 records, once the API is built for serving an Autocomplete application, this decision was taken to not compromise client's processing and avoid a performance lack.
- The search query is case insensitive, and searches at any part of the fields
- The year may be searched by using a structure of ":"

### Project Structure
The Book-Fetch API is built using a Router-Controller pattern,

### Installation
Book-Fetch API requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

With [npm](https://npm.org/):
```sh
$ cd book-fetch-api
$ npm install
```
With [yarn](https://yarnpkg.com/):
```sh
$ cd book-fetch-api
$ yarn install
```
### Executing
To run in DEV environment, it's possible to execute directly with your package manader:

With [npm](https://npm.org/)
```sh
$ npm run dev
```
With [yarn](https://yarnpkg.com/)
```sh
$ yarn dev
```

The Book-fetch API has a Development (Dockerfile)['/server/Dockerfile.dev'] in the project root to automatically download the dependencies and execute the application using (docker.io)[https://docker.io]. Make sure you have Docker installed in your machine, and follow the steps below:

First, build the docker image:
```sh
$ docker build -t <YOUR_USER>/book-fetch-api:1.0.0 .
```
By default, this application is configured to use `sqlite` database. You can set-up your own database by modifying the file (config.database.js)['/server/src/config/database.js'] to set your preferred DB `dialect`, and set the variables `DB_HOST`, `DB_USER`, `DB_PASS` and `DB_NAME` to your preferred database. For this, you may create local environment variables, create a .env file in the root of this project. If using docker, you can add the variables inline by using `docker run -e "DB_HOST=<HOST>" -e "DB_NAME=...` command, or set them in the Dockerfile by using the `ENV` command.

To execute the created image, use the `docker run` command as below:
```sh
$ docker run -v ${PWD}:/srv/server -v /srv/server/node_modules -p 3333:3333 --rm <YOUR_USER>/book-fetch-api:1.0.0
```
When using your own Database, it's necessary to execute the DB migration command, as follows:

NPM(X):
```sh
$ npx sequelize-cli db:migrate
```

YARN:
```sh
$ yarn sequelize db:migrate
```

### Book Structure
This JSON Structure Example for inserting a Book:
```json
{
	"title": "The Lord of The Rings",
	"author": "J.R.R Tolkien",
	"year": "1954"
}
```
Title and Author Fields are required. The Year is an optional field.
In case of a missing field, the application will return a `404` error with an `error` message

### Storing a Book
Once the application is running, you may execute the following POST requisiton to the Server to store a Book:
```sh
$ curl -d '{"title":"TITLE_VALUE", "author":"AUTHOR_VALUE", "year": "YEAR_VALUE"}' -H "Content-Type: application/json" -X POST http://localhost:3333/books
```
The returned value is an Array of `books`, containing a maximum of 10 records.

### Running Tests
To run the test suite with YARN:
```sh
$ yarn test
```
To run the test suite with NPM:
```sh
$ npm run test
```

Coverage information is displayed and saved in the folder `__tests__/coverage`

### Deploying to Production
The Book-Fetch API provides a Production (Dockerfile)['/server/Dockerfile'] that creates the production bundle.

## Future Improvements
- Implementing the Frontend;
- Integration with external services to fetch reviews;
- Additional Fields and metadata;
- Rating service;
- Multistage build and docker-compose
