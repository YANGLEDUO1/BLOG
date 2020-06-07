const { Article } = require('../../model/article')
const { Comment } = require('../../model/comment')
module.exports = async (req, res) => {
    const { id } = req.query
    const intro = await Article.findOne({ _id: id }).populate('author').exec()
    const introComment = await Comment.find({aid:id}).populate('uid').exec()

    res.render('article-intro.html', {
        intro,
        name: req.session.username,
        introComment,
    })
}