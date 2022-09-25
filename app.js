const express = require("express")
const router = require("./routes/routes")
const app = express()
const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/blogs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router)


app.listen(3000)