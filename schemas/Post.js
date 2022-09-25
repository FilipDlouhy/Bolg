const mongoose = require("mongoose")
const schema = mongoose.Schema

const postSchema = new schema({
title:String,
text:String


})

module.exports = mongoose.model("Posts",postSchema)