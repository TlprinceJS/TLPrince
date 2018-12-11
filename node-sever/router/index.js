const Router = require('koa-router')
const router = new Router
const body = require('koa-body')
const getGuFengData = require('../control/data/GuFengData')
const {reg} = require('../control/user')
const {login} = require('../control/user')
const {keepLog} = require('../control/user')
const {logout} = require('../control/user')
const upload = require('../uitl/upload')
const {public} = require('../control/article')
const {articleList} = require('../control/article')
const {allArticleList} = require('../control/article')
const {articleDetial} = require('../control/article')
const {publishComment} = require('../control/comment')
const {getComment} = require('../control/comment')

// 网站主页
router.get('/home/main',keepLog, allArticleList)
// 动漫页面
router.get('/home/comic', keepLog)
// 古风页面
router.get('/gufeng', getGuFengData)
// 用户注册
router.post('/reg', body(), reg)
// 用户登录
router.post('/login', body(), login)
// 用户退出
router.get('/logout', logout)
// 文章封面图片上传
router.post('/upload', upload.single('file'),async (ctx) => {
    ctx.body = {
        message: '上传成功'
    }
})
// 文章发表
router.post('/publish',body(), keepLog, public)
// 文章分页
router.get('/home/main/page/:id', articleList)
// 文章详情
router.get('/home/article/:id', articleDetial)
// 发表评论
router.post('/comment',body(),keepLog, publishComment)
// 评论列表
router.get('/commentList', getComment)

module.exports = router