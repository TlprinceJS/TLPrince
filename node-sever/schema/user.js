const {Schema} = require('./config')

const UserSchema = new Schema({
    username: String,
    password: String,
    avatar: {
        type: String,
        default: "/avatar/default.jpg"
      },
    articleNum: Number,
    commentNum: Number
})

module.exports = {
    UserSchema
}