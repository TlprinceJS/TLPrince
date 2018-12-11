const multer = require('koa-multer')
const {join} = require('path')

const storage = multer.diskStorage({
    destination: join(__dirname, '../public/articleCover'),
    filename(req, file, callback){
        const filename = file.originalname.split(".")
        callback(null, `${Date.now()}.${filename[filename.length - 1]}`)
    }
})

module.exports = multer({storage})