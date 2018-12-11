const {Schema} = require("./config")
const ObjectId = Schema.Types.ObjectId

const ArticleSchema = new Schema({
    kind: String,
    title: String,
    content: String,
    img_url: String,
    cover: String,
    author: {
        type: String,
        ref: "users"
    },
    commentNum: Number},
    {versionKey: false, timestamps: {
        createdAt: "created"
    }
})

module.exports = ArticleSchema