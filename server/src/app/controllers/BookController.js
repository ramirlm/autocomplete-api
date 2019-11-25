import { Op } from 'sequelize';
import book from '../models/Book';

class BookController {
  async store(req, res) {
    try {
      const createdBook = await book.create(req.body);
      return res.status(201).json(createdBook);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async query(req, res) {
    const qry = req.params.qry.toLowerCase();

    const books = await book.findAll({
      where: {
        title: { [Op.like]: `%${qry}%` },
      },
    });
    return res.status(200).json(books);
  }
}

export default new BookController();
