const mongoose = require('mongoose')
const Joi = require('joi')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const { Article } = require('./article')
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        //保证邮箱不重复
        unique: true
    },
    //admin超级管理员
    role: {
        type: String,
        required: true
    },
    state: {
        type: Number,
        enum: [0, 1]
    }
})

const validateUser = (user) => {
    const schema = {
        username: Joi.string().min(2).max(12).required().error(new Error('用户名不符合规则')),
        email: Joi.string().email().required().error(new Error('邮箱不符合规则')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码不符合规则')),
        role: Joi.string().valid('normal', 'admin').required().error(new Error('角色不符合规则')),
        state: Joi.number().valid(0, 1).required().error(new Error('状态非法'))
    }
    return Joi.validate(user, schema)
}

const User = mongoose.model('User', userSchema)

async function createUser(){
   const salt = await bcrypt.genSalt(10)
   const pass =  await bcrypt.hash('123456',salt)
   const user = await User.create({
       username:'lxl',
       email:'lxl@qq.com',
       password:pass,
       role:'admin',
       state:0
   })
}
 createUser()


module.exports = {
    User,
    validateUser
}