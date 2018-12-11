const User = require('./dbModels/user')
const encrypt = require('../uitl/crypto')

// 用户注册逻辑
const reg = async (ctx) => {
    const result =ctx.request.body
    const username = result.username
    const password = result.password
    console.log(result)
    await new Promise((resolve, reject) => {
        User.find({username},(err, data) => {
            if(err) return reject(err)
            if(data.length != 0) return resolve('')

            const _user = new User({
                username,
                password: encrypt(password),
                commentNum: 0,
                articleNum: 0
            })

            _user.save((err, data) => {
                if(err){
                  reject(err)
                }else{
                  resolve(data)
                }
              })
            })
          })
          .then(async data => {
            if(data){
              // 注册成功
                ctx.body = {
                    status: "1",
                    msg: '注册成功'
                }
            }else{
              // 用户名已存在
                ctx.body = {
                    status: "1",
                    msg: '用户名已存在'
                }
            }
          })
          .catch(async err => {
            ctx.body = {
                status: "1",
                msg: '注册失败'
            }
    })
}
// 用户登录逻辑
const login = async (ctx) => {
    const result = ctx.request.body
    const username = result.username
    const password = result.password
    
    await new Promise((resolve, reject) => {
        User.find({username}, (err, data) => {
            if(err) return reject(err)
            if(data.length === 0) return resolve('用户名不存在')
            if(data[0].password === encrypt(password)) return resolve(data)
            resolve('')
        })
    })
    .then( async (data) => {
        if(!data) {
            return ctx.body = {
                status: 0,
                msg: '密码错误，请重新输入'
            }
        }

        // 让用户在他的 cookie 里设置 username 权限
    ctx.cookies.set("username", username, {
        domain: "localhost",
        path: "/",
        maxAge: 36e5,
        httpOnly: false, // true 不让客户端能访问这个 cookie
        overwrite: false
      })
      // 用户在数据库的_id 值
      ctx.cookies.set("uid", data[0]._id, {
        domain: "localhost",
        path: "/",
        maxAge: 36e5,
        httpOnly: false, // true 不让客户端能访问这个 cookie
        overwrite: false
      })

      ctx.session = {
        flag: true,
        username,
        uid: data[0]._id,
        avatar: data[0].avatar,
      }


        ctx.body = {
            status: 1,
            msg: '登陆成功',
            session: ctx.session
        }
    })
    .catch (async (data) => {
        cxt.body = {
            status: 0,
            msg: '用户名已存在'
        }
    })
}
// 用户状态管理逻辑
const keepLog = async (ctx, next) => {
    if(ctx.session.isNew){// session没有
        console.log(ctx.cookies.get("username"))
        if(ctx.cookies.get("username")){
          let uid = ctx.cookies.get("uid")
          const avatar = await User.findById(uid)
            .then(data => data.avatar)
    
          ctx.session = {
            flag: true,
            username: ctx.cookies.get('username'),
            uid,
            avatar
          }
            ctx.body = ctx.session
        }
        ctx.body = {
            flag: false
        }
    }
    next()
}
// 用户退出逻辑
const logout = async (ctx) => {
    ctx.session = null;
    ctx.cookies.set("username", null, {
        maxAge: 0
      })
      
      ctx.cookies.set("uid", null, {
        maxAge: 0
      })
      ctx.body = {
          flag: true
      }
}
module.exports = {
    reg,
    login,
    keepLog,
    logout
}