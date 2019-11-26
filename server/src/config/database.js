require('dotenv/config');

module.exports = {
  dialect: process.env.DB_DIALECT,
  storage: './src/database/db.sqlite',
  // Fields used only if the DB is not a file db
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
