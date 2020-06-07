const { Comment } = require('../../model/comment')
module.exports = async (req, res) => {
    // const { aid } = req.query
    const body = req.body
    // res.send(aid)
    await Comment.create({
        content:body.content,
        aid:body.aid,
        uid:body.uid,
        time:new Date()
    })
    res.redirect(`/home/article-intro?id=${body.aid}`)
}