const express=require('express');
const router=express.Router();

require('../db/conn');
const content=require('../model/contentSchema');







router.post('/home',async(req,res)=>{
    
    try{
    const {heading,author,desc,link,linkname,genre,timestamp}=req.body;
    console.log(req.body)

    // content.image=req.file.path
    // const {newsImage}=req.file.path;
    
    const newContent=new content({heading,author,desc,link,linkname,genre,timestamp});
   
    await newContent.save();
    res.status(207).json(newContent)
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



router.get('/political',(req,res)=>{
    try{
        
    content
            .find({genre:"political"},function(err,result){
                if(err)
                    res.send(err);
                res.json(result);
            })  
    }
    catch(err){
        console.log(err);
    }
})


router.get('/entertainment',(req,res)=>{
    try{
    content
            .find({$or:[{genre:"bollywood"},{genre:"hollywood"}]},(err,result)=>{
                if(err)
                    res.send(err);
                res.json(result);
            })  
    }
    catch(err){
        console.log(err);
    }
})

router.get('/business',(req,res)=>{
    try{
        
    content
            .find({genre:"business"},function(err,result){
                if(err)
                    res.send(err);
                res.json(result);
            })  
    }
    catch(err){
        console.log(err);
    }
})

router.get('/automobiles',(req,res)=>{
    try{
        
    content
            .find({genre:"automobiles"},function(err,result){
                if(err)
                    res.send(err);
                res.json(result);
            })  
    }
    catch(err){
        console.log(err);
    }
})


router.get('/science',(req,res)=>{
    try{
        
    content
            .find({genre:"science"},function(err,result){
                if(err)
                    res.send(err);
                res.json(result);
            })  
    }
    catch(err){
        console.log(err);
    }
})


router.get('/startup',(req,res)=>{
    try{
        
    content
            .find({genre:"startup"},function(err,result){
                if(err)
                    res.send(err);
                res.json(result);
            })  
    }
    catch(err){
        console.log(err);
    }
})
router.get('/technology',(req,res)=>{
    try{
        
    content
            .find({genre:"technology"},function(err,result){
                if(err)
                    res.send(err);
                res.json(result);
            })  
    }
    catch(err){
        console.log(err);
    }
})

router.get('/sports',(req,res)=>{
    try{
        
    content
            .find({genre:"sports"},function(err,result){
                if(err)
                    res.send(err);
                res.json(result);
            })  
    }
    catch(err){
        console.log(err);
    }
})


router.get('/innovations',(req,res)=>{
    try{
        
    content
            .find({genre:"innovations"},function(err,result){
                if(err)
                    res.send(err);
                res.json(result);
            })  
    }
    catch(err){
        console.log(err);
    }
})



module.exports=router;