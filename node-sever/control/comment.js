const Article = require('./dbModels/article')
const User = require('./dbModels/user')
const Comment = require('./dbModels/comment')

// 发表评论逻辑
const publishComment = async (ctx) => {
    let message = {
        status: 0,
        msg: "请先登录"
      }
      // 验证用户是否登录
      if(ctx.session.isNew)return ctx.body = message

      const result = ctx.request.body
      result.from = ctx.session.username
      console.log(result)
      const _comment = new Comment(result)

        await _comment
            .save()
            .then(data => {
            message = {
                status: 1,
                msg: '评论成功'
            }

            Article
                .update({_id: data.article}, {$inc: {commentNum: 1}}, err => {
                if(err)return console.log(err)
                console.log("评论计数器更新成功")
                })

                // 更新用户的评论计数器
                User.update({_id: data.from}, {$inc: {commentNum: 1}}, err => {
                if(err) return console.log(err)
                })
        })
        .catch(err => {
            message = {
              status: 0,
              msg: err
            }
          })
        ctx.body = message
}

// 获取评论逻辑
const getComment = async (ctx) => {
    const id = ctx.query.id
    console.log(id)
    const commentData = await Comment
        .find({article: id}).populate('username')
    
    ctx.body = {
        status: 0,
        data: commentData
    }
}
module.exports = {
    publishComment,
    getComment
}