const mongoose = require('mongoose')
const { Article } = require('./article')
const { User } = require('./user')
const schema = mongoose.Schema

const CommentSchema = new schema({
    //文章id
    aid: {
        type: schema.Types.ObjectId,
        ref: 'Article'
    },
    // 用户id
    uid: {
        type: schema.Types.ObjectId,
        ref:'User'
    },
    //评论时间
    time:{
        type:Date
    },
    content:{
        type:String
    }
})

const Comment = mongoose.model('Comment',CommentSchema)

module.exports = {
    Comment,
}