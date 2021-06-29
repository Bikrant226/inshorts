const express=require('express');
const router=express.Router();
const cors=require('cors');
require('../db/conn');
const content=require('../model/contentSchema');


var corsOptions = {
    origin: 'http://localhost:3001/home'
}


router.post('/home',async(req,res)=>{
    try{
    const {heading,author,desc,link,linkname,timestamp}=req.body;
    const newContent=new content({heading,author,desc,link,linkname,timestamp});

    await newContent.save();

    res.status(207).json({message:"successfully stored in db"})
    }catch(err){
        console.log(err);
    }
});



router.get('/home',(req,res)=>{
    try{
        content
            .find({},function(err,result){
                if(err)
                    res.send(err);
                res.json(result);
            })  
    }
    catch(err){
        console.log(err);
    }
});

module.exports=router;