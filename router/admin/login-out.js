module.exports = (req,res)=>{
    req.session.destroy(function(){
        res.clearCookie('connect.sid')
        // req.locals.userInfo = null;
        res.redirect('/admin/login')
    })
   
}