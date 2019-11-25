import request from 'supertest';
import app from '../../src/app';

// Beforeall or migration???
const book = {
  title: 'Lord of The Rings',
  author: 'JRR Tolkien',
  year: 1999,
};

describe('Book Creation', () => {
  it('should be able to create a book', async () => {
    const response = await request(app)
      .post('/books')
      .send(book)
      .expect(201);
    expect(response.body).toHaveProperty('createdId');
  });
});

describe('Book Query', () => {
  it('should be able to find books by title', async done => {
    const response = await request(app)
      .get('/books/')
      .query({ q: book.title })
      .expect(200);
    expect(response.body.books[0].title).toBe(book.title);
    done();
  });

  it('should be able to find books by author', async done => {
    const response = await request(app)
      .get('/books/')
      .query({ q: book.author })
      .expect(200);
    expect(response.body.books[0].author).toBe(book.author);
    done();
  });

  it('should be able to find books by year', async done => {
    const response = await request(app)
      .get('/books/')
      .query({ q: book.year })
      .expect(200);
    expect(response.body.books[0].year).toBe(book.year);
    done();
  });

  it('should be able to find books by title case-agnostically', async done => {
    const response = await request(app)
      .get('/books/')
      .query({ q: book.title.toUpperCase() })
      .expect(200);
    expect(response.body.books[0].title).toBe(book.title);
    done();
  });
});
