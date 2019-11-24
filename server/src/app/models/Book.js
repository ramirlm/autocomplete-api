import Sequelize, { Model } from 'sequelize';

class User extends Model {
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

export default User;
