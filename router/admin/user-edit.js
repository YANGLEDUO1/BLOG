const {User} = require('../../model/user')
module.exports = async (req,res)=>{
    const {message,id} = req.query
    let editUsers = await User.findOne({_id:id})
    if(id){
        let path = '/admin/user-edit'
        let btn = '更改'
        res.render('user-edit.html',{
            editUsers:editUsers,
            path:path,
            btn:btn,
            dis:'disabled',
            id:id
        })
    }else{
        let path = '/admin/user-add'
        let btn = '提交'
         res.render('user-edit.html',{
             message:message,
             path:path,
             btn:btn
         })
    }
}