const Koa = require('koa')
const router = require('./router/index')
const body = require("koa-body")
const bodyparser = require('koa-bodyparser')
const session = require('koa-session')
const {join} = require('path')
const static = require('koa-static')



const app = new Koa
app.keys = ["tlprince"]

// session 的配置对象
const CONFIG = {
  key: "Tlprince",
  maxAge: 36e5,
  overwrite: true,
  httpOnly: true,
}
    // 配置路由
    app.use(router.routes()).use(router.allowedMethods())
    // 配置post请求
    app.use(body())
    app.use(bodyparser())
    // 配置session
    app.use(session(CONFIG, app))
    // 设置静态目录
    app.use(static(join(__dirname, "public")))










    app.listen(3000, ()=> {
    console.log("数据接口启动成功，监听在3000接口")
})
