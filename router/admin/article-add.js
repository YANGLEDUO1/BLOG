const formidable = require('formidable')
const path = require('path')
const {Article} = require('../../model/article')
module.exports = (req, res) => {
    // res.send(req.body)
    //创建解析对象
   const form =  new formidable.IncomingForm();
   //设置保存路径
   form.uploadDir = path.join(__dirname,'../','../','public','uploads')
   //设置保存后缀名
   form.keepExtensions = true
   //解析表单
   form.parse(req,async(err,fields,files)=>{
       await Article.create({
           title:fields.title,
           author:fields.author,
           publishDate:fields.publishDate,
           cover:files.cover.path.split('BLOG')[1],
           content:fields.content,
       })
       res.redirect(`/admin/article?id=${fields.author}`)
   })
  
}