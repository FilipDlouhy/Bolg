const mongoose = require("mongoose")
const schema = mongoose.Schema

const comentSchema = new schema({
username:String,
text:String,
postId:String


})

module.exports = mongoose.model("Coments",comentSchema)