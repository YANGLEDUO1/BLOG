const { User } = require('../../model/user')
module.exports = async (req, res) => {
    const userUpdate = req.body
     await User.findByIdAndUpdate({_id:userUpdate.id},userUpdate)
     res.redirect('/admin/user')
}