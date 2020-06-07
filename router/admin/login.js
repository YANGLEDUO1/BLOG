const { User } = require('../../model/user')
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
  const { email, password } = req.body

  if (email.trim().length == 0 || password.trim().length == 0) {
    return res.status(400).render('error.html')
  }

  let userList = await User.findOne({ email: email })

  if(userList){
        //比对密码,返回布尔值
        let isValid = await bcrypt.compare(password,userList.password)
       if(isValid){
         req.session.username = userList.username
         req.session.user = userList
         req.app.locals.userInfo = userList
         if(userList.role=='admin'){
          res.redirect('/admin/user')
         }else{
           res.redirect('/home/index')
         }
       }else{
        return res.status(400).render('error.html',{msg:'邮箱或者密码错误'})
       }
  }else{
    //没有查询到用户
    return res.status(400).render('error.html',{msg:'邮箱或者密码错误'})
  }


}