import request from 'supertest';
import app from '../../src/app';

describe('Book', () => {
  it('should be able to find books by name', async () => {
    const response = await request(app)
      .get('/books')
      .send({ name: 'abc' })
      .expect(200);

    expect(response.body).toHaveProperty('id');
  });
});
