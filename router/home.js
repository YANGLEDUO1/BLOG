const express = require('express')

const home = express.Router()

home
.get('/index',require('./home/index'))
.get('/article-intro',require('./home/article-intro-page'))
.post('/comment',require('./home/comment'))

module.exports = home