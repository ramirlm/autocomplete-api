import { Router } from 'express';
import BookController from './app/controllers/BookController';

const routes = new Router();

routes.get('/books/:qry', BookController.query);
routes.post('/books', BookController.store);

export default routes;
