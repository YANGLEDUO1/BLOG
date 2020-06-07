const {User,validateUser} =require('../../model/user')
const bcrypt = require('bcrypt')
module.exports = async (req,res,next)=>{
      const user = req.body
       
      try {
         await validateUser(user)
      } catch (error) {
         
          return next(JSON.stringify({path:'/admin/user-add',message:error.message}))
      }
      
      let haveUser = await User.findOne({email:user.email})
     if(haveUser){
        return next(JSON.stringify({path:'/admin/user-add',message:'邮箱已存在'}))
     }else{
        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(user.password,salt)
        user.password = password
        await User.create(user)
        
        res.redirect(`/admin/user`)
     }
      
  
}