import book from '../models/Book';

class BookController {
  async store(req, res) {
    try {
      const createdBook = await book.create(req.body);
      return res.status(201).json({ createdId: createdBook.id });
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }

  async query(req, res) {
    const query = req.query.q;
    const queryNumber = isNaN(parseInt(query, 0)) ? 0 : parseInt(query, 0);

    const books = await book.sequelize.query(
      'SELECT * from "books" WHERE LOWER("title") like (:query) OR LOWER("author") like (:query) OR "year" = (:queryNumber) LIMIT 10',
      {
        replacements: {
          query: `%${query.toLowerCase()}%`,
          queryNumber,
        },
        model: book,
        mapToModel: true,
      }
    );
    return res.status(200).json({ books });
  }
}

export default new BookController();
