const mongoose=require('mongoose')
const dotenv=require('dotenv');

dotenv.config({path:'./config.env'})
const url=process.env.DATABASE


mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false,useUnifiedTopology:true})
    .then(()=>{
        console.log('sucessfully connected');
    })
    .catch((err)=>{
        console.error(err);
    })