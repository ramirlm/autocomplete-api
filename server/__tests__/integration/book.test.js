import request from 'supertest';
import app from '../../src/app';

// Beforeall or migration???

describe('Book', () => {
  it('should be able to find books by name', async () => {
    const response = await request(app)
      .get('/books')
      .send({ name: 'Lord of The Rings' })
      .expect(200);
    expect(response);
  });
});
