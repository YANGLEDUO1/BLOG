const {User} = require('../../model/user')
const pagination = require('mongoose-sex-page')
module.exports = async (req,res)=>{
    const {page} = req.query
    let users = await pagination(User).page(page).size(10).display(2).find().exec()

    let count = await User.countDocuments()
    res.render('user.html',{
        users:users,
        count:count
    })
}