import { Router } from 'express';
import BookController from './app/controllers/BookController';

const routes = new Router();

routes.get('/books', BookController.store);

export default routes;
