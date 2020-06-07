const { Article } = require('../../model/article')
module.exports = async (req, res) => {
    const { id } = req.query
    if (id) { 
        const articleList = await Article.findOne({_id:id})
        const path =`/admin/article-update?id=${id}`
        const btn = '重新发布'
        res.render('article-edit.html', {
              articleList,
              path,
              btn,
        })
    }else{
        const path ='/admin/article-edit'
        const btn = '发布'
        res.render('article-edit.html',{
            path,
            btn,
        })
    }

}