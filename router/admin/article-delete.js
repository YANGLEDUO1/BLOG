const { Article } = require('../../model/article')
module.exports = async (req, res) => {
     const {id} = req.query
    await Article.findByIdAndDelete({_id:id})
    res.redirect('/admin/article')
}