import book from '../models/Book';

class BookController {
  async store(req, res) {
    const books = book.findAll({
      where: {
        title: req.params.query,
      },
    });
    return res.status(200).json(books);
  }
}

export default new BookController();
