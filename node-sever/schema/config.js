const mongoose = require('mongoose')
const db = mongoose.createConnection("mongodb://localhost:27017/tlphome", {useNewUrlParser: true})
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

db.on("err", () => {
    console.log("数据库连接失败");
    
})

db.on("open", () => {
    console.log("数据库连接成功");
    
})

module.exports = {
    db,
    Schema
}