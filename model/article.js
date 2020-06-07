const mongoose = require('mongoose')
const { User } = require('./user')
const Joi = require('joi')
const schema = mongoose.Schema

const articleSchema = new schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: schema.Types.ObjectId,
        ref: 'User',
        required: [true, '请传递作者']
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    cover: {
        type: String,
        default: null
    },
    content: {
        type: String
    }
})

const Article = mongoose.model('Article', articleSchema)

const validateArticle = (article)=>{
    
    const Schema = {
    title:Joi.string().min(2).max(12).required().error(new Error('标题最少两位,最多十二'))
   }
   
   return Joi.validate(article,Schema)
}

module.exports = {
    Article,
    validateArticle,
}