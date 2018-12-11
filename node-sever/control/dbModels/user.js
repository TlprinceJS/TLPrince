const {db} = require('../../schema/config')
const {UserSchema} = require('../../schema/user')

const User = db.model("users", UserSchema)

module.exports = User