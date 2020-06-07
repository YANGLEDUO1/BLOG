const { Article } = require('../../model/article')
const pagination = require('mongoose-sex-page')
module.exports = async (req, res) => {
    const {page} = req.query

    const article = await pagination(Article).page(page).size(4).display(3).populate('author').exec()
    // res.send(article)
    // return false
    // res.send(req.session.username)
    // return false
    res.render('index.html',{
        article,
        name:req.session.user
    })
}