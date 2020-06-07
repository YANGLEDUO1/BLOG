const {User} = require('../../model/user')
module.exports = async (req,res)=>{
    let del = req.body
    // res.send(del)
   await User.findOneAndDelete({_id:del.id})
   res.redirect('/admin/user')
}