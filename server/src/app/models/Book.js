import Sequelize, { Model } from 'sequelize';

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        author: Sequelize.STRING,
        year: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Book;
