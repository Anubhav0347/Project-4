const express=require('express')
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose')
const route=require("./routes/route")
const app= express()
const dotenv=require("dotenv");
dotenv.config();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser:true})
.then(()=> console.log("MongoDb is connected"))
.catch(err => console.log(err))

app.use('/',route)

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});