const Article = require('./dbModels/article')
const User = require('./dbModels/user')
const fs = require("fs")
const {join} = require("path")


// 文章发表逻辑
const public = async (ctx) => {
    const result = ctx.request.body
    delete result.file
    result.author = ctx.session.username
    result.commentNum = 0
    const img_arr = fs.readdirSync(join(__dirname, "../public/articleCover"))
    result.cover = "http://localhost:3000/articleCover/"+img_arr[img_arr.length-1]
    ctx.redirect("/homes")
    await new Promise((resolve, reject) => {
        new Article(result).save((err, data) => {
          if(err)return reject(err)
          // 更新用户文章计数
          User.update({_id: data.author}, {$inc: {articleNum: 1}}, err => {
            if(err)return console.log(err)
          })
          console.log(data.author)
          resolve(data)
        })
      })
      .then( async data => {
        ctx.body = {
          msg: "发表成功",
          status: 1
        }
      })
      .catch( async err => {
        ctx.body = {
          msg: "发表失败",
          status: 0
        }
      })
}
// 获取所有文章列表
const allArticleList = async (ctx) => {
    const data = await Article.find()
    ctx.body = {
        code: 0,
        count: data.length,
        data
    }
}
// 文章分页逻辑
const articleList = async (ctx, next) => {
    let page = ctx.params.id
    console.log(ctx.params.id)
    page--
    
    const artList = await Article
    .find()
    .sort('-created')
    .skip(5 * page)
    .limit(5)
    //拿到了5条数据
    // .populate({
    //   path: "author",
    //   select: '_id username avatar'
    // }) // mongoose 用于连表查询
    .then(data => {
        ctx.body = data
    })
    .catch(err => console.log(err))
    next()
}
// 文章详情逻辑
const articleDetial = async (ctx) => {
      // 去动态路由的里的 id
    const _id = ctx.params.id
    console.log(_id)
    // 查找文章本身数据
    const article = await Article
      .findById(_id)
      .then(data => {
          ctx.body = data
      })
}

module.exports = {
    public,
    articleList,
    allArticleList,
    articleDetial
}