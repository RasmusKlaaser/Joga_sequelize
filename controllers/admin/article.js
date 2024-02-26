// connect to database
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:password@localhost:3306/joga-sequelize');

// read model data for table representation
const models = require('../../models');

// create new article into daya table
const createArticle = (req, res) => {
    // get form data
    let name = req.body.name
    let slug = req.body.slug
    let image = req.body.image
    let body = req.body.body
 
    // create new article by Article model
    const newArticle = models.Articles.create({
        // add values fot NOT NULL fields
        // left one - data table fields
        // right one - values from form
        name: name,
        slug: slug,
        image: image,
        body: body,
        // published date generate as now()
        published: new Date().toISOString().slice(0, 19).replace('T', ' ')
    })
    .then(article => {
        console.log(article)
        return res.status(200).json({ message: 'New article is added' });
    })
    .catch (error => {
        return res.status(500).send(error.message);
    })
}

const updateArticle = (req, res) => {
    // update article by Article model
    const updatedArticle = models.Articles.update(req.body, {
      where: { id: req.params.id }}
    )
    .then(article => {
        console.log(article)
        return res.status(200).json({ message: 'Article updated' });
    })
    .catch (error => {
        return res.status(500).send(error.message);
    })
} 

const deleteArticle = (req, res) => {
    // delete article by Article model
    const deletedArticle = models.Articles.destroy({
        where: { id: req.params.id }} 
    )
    .then(article => {
        console.log(article)
        return res.status(200).json({ message: 'Article updated' });
    })
    .catch (error => {
        return res.status(500).send(error.message);
    })
} 

// exports controller functions
module.exports = {
    createArticle,
    updateArticle,
    deleteArticle
};