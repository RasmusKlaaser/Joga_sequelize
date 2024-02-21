const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(err => {
        console.error('Unable to connect to the database', err);
    });

//using routes and controllers
const articleRouter = require('./routes/article');
app.use('/', articleRouter);
app.use('article', articleRouter)
app.use('/author', authorRouter);


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});