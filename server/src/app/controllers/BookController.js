import { Sequelize } from 'sequelize';
import book from '../models/Book';

class BookController {
  async store(req, res) {
    const qry = req.body.query.toLowerCase();

    const books = await book.findAll({
      where: {
        title: Sequelize.where(
          Sequelize.fn('LOWER', Sequelize.col('title')),
          'LIKE',
          `%${qry}%`
        ),
      },
    });
    return res.status(200).json(books);
  }
}

export default new BookController();
