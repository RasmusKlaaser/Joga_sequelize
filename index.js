const express = require('express');
const app = express();

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// connect to database
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

// testing connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to the database.');

    })
    .catch(err => {
        console.log('Unable to connect to the database:', err);
    });

// using routes and controllers
const articleRouter = require('./routes/article');
app.use('/', articleRouter);
app.use('/article', articleRouter);
app.use('/admin/article', articleRouter);

const authorRouter = require('./routes/author');
app.use('/author', authorRouter);

// listen requests
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})