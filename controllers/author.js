// connect to database
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:password@localhost:3306/joga-sequelize');

// read model data for table representation
const models = require('../models');

// get all data from table
const getAllAuthors = (req, res) => {
    models.Authors.findAll()
    .then(authors => {
        console.log(authors)
        return res.status(200).json({ authors });
    })
    .catch(error => {
        return res.status(500).send(error.message);
    })
};

// show article by this slug
const getAuthorById = (req, res) => {
    models.Authors.findByPk(req.params.id)
    .then(author => {
        models.Articles.findAll({
            where: {
            author_id: req.params.id
            }
        })
        .then(articles => {
        console.log(author)
        return res.status(200).json({ author, articles });
        })
    })
    .catch (error => {
        return res.status(500).send(error.message);
    })
};

// export controller functions
module.exports = {
    getAllAuthors,
    getAuthorById
};