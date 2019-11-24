import { Router } from 'express';

const routes = new Router();

routes.get('/books', (req, res) =>
  res.json({ message: 'Welcome to Omni CLI' })
);

export default routes;
