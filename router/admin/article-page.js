const { Article } = require('../../model/article')
// const { User } = require('../../model/user')
const pagination = require('mongoose-sex-page')

module.exports = async (req, res) => {
    const { page, id } = req.query
    const role = req.session.user

    if (role.role == 'admin') {
        const article = await pagination(Article).page(page).size(6).display(4).find().populate('author').exec()
        const count = await Article.countDocuments()

        res.render('article.html', {
            article,
            count,
            
        })
    } else {
        const article = await pagination(Article).page(page).size(6).display(4).find({author:id}).populate('author').exec()
        const count = await Article.countDocuments()
    
        res.render('article.html', {
            article,
            count,
            Uid:id,
        })
    }


}