# Book-Fetch API
A Node.JS API to provide the creation and querying of books.

### Features
- The Book Query searches for any of the Book's fields.
- The result of books is limited to 10 records, once the API is built for serving an Autocomplete application, this decision was to not compromise client's processing.
- The search query is case insensitive, finding

### Project Structure
The Book-Fetch API is built using a Router-Controller pattern,

### Assumptions
- Docker needs to be installed on the host machine

### Book Structure
- JSON Example:

### Installation
The Book-Fetch API
- Docker DB
- Migrations

### Executing
-

### Storing a Book
Run the following POST requisiton to the Server will store a Book:
```sh
$ curl -d '{"title":"TITLE_VALUE", "author":"AUTHOR_VALUE", "year": "YEAR_VALUE"}' -H "Content-Type: application/json" -X POST http://localhost:3333/books
```
### Running Tests
To run the test suite with YARN:
```sh
$ yarn test
```
To run the test suite with NPM:
```sh
$ npm run test
```

### Deploying to Production

## Future Improvements
