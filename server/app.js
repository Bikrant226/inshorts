const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const path=require('path');
var cookieParser = require('cookie-parser');
require('./db/conn')
const app=express();
app.use(cookieParser());
dotenv.config({path:'./config.env'})
const PORT=process.env.PORT

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(require('./route/auth'))
app.use(require('./route/cont'))


app.listen(PORT,()=>{
    console.log(`server started at port  ${PORT}`)
})