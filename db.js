require('dotenv').config();
const {Sequelize} = require('sequelize');
const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME} = process.env;
const authorModel = require('./models/Author.js');
const bookModel = require('./models/Book.js');
const publisherModel = require('./models/Publisher.js');


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
{
  logging: false
});

authorModel(sequelize);
bookModel(sequelize);
publisherModel(sequelize);


const {Author, Book, Publisher} = sequelize.models


Author.belongsToMany(Book, { through: "BookAuthor", foreignKey: "authorDni", as: "books" });
Book.belongsToMany(Author, { through: "BookAuthor", foreignKey: "bookId", as: "authors" });

Publisher.hasMany(Book, {foreignKey: "publisherCuil"});
Book.hasOne(Publisher);



module.exports = {
    conn: sequelize,
    ...sequelize.models
}