const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const template = require('art-template')
const dateFormat = require('dateformat')
template.defaults.imports.dateFormat = dateFormat
require('./model/connect')
require('./model/user')

app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(session({
        secret: 'secret key',
        saveUninitialized: false,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000
        }
    }))
    .set('views', path.join(__dirname, 'views'))
    .engine('html', require('express-art-template'))
    .use('/public', express.static(path.join(__dirname, './public')))
    .use('/node_modules', express.static(path.join(__dirname, './node_modules')))
     
    .get('/',require('./router/home/index'))
    .use('/admin', require('./middleware/loginGuard'))
    .use('/admin', require('./router/admin'))
    .use('/home',require('./router/home'))
    .use((err, req, res, next) => {
        let result = JSON.parse(err)
        res.redirect(`${result.path}?message=${result.message}`)
    })





    .listen(80, () => {
        console.log('server running....')
    })