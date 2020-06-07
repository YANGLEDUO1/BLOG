const express = require('express')

const admin = express.Router()

admin
.get('/login',require('./admin/login-page'))
.get('/article',require('./admin/article-page'))
.get('/user',require('./admin/user-page'))
.get('/user-edit',require('./admin/user-edit'))
.post('/login',require('./admin/login'))
.get('/login-out',require('./admin/login-out'))
.get('/user-add',require('./admin/user-edit'))
.post('/user-add',require('./admin/user-add'))
.post('/user-edit',require('./admin/user-update'))
.post('/user-delete',require('./admin/user-delete'))
.get('/article-edit',require('./admin/article-edit'))
.post('/article-edit',require('./admin/article-add'))
.post('/article-update',require('./admin/article-update'))
.get('/article-delete',require('./admin/article-delete'))


module.exports = admin