const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');
require('../db/conn')
const user=require('../model/userSchema');
const authenticate=require('../middleware/authenticate');


//USING ASYNC AWAIT


router.post('/register',async(req,res)=>{
    const {name,email,phone,work,password,cpassword}=req.body

    if(!name){
        return res.status(422).json({error:"fill name"});
    }
    try{

        const userExist= await user.findOne({email:email})//if db's email is same as user's email(left=db's email,right=user's email)
        if(userExist){
            return res.status(422).json({error:"email already exist"})//if email exist,return the user 
        }else if(password!=cpassword){
            return res.status(422).json({error:"password didnt matched"})
        }else{
        const newUser=new user({name,email,phone,work,password,cpassword})//if email doesn't exists in db,create one
        
        //hash passwords before calling saving into in db
        newUser.password = await bcrypt.hash(newUser.password, 12);
        newUser.cpassword = await bcrypt.hash(newUser.cpassword, 12);
      //save into db
        await newUser.save();
        res.status(207).json({message:"successfully stored in db"})
    }}
    catch(err){
        console.error(err)
    }
    
})



router.post('/signin',async(req,res)=>{
    // console.log(req.body)
    // console.log('done!!!')
    try{
        const {email,password}=req.body

        if(!email || !password){
            return res.status(400).json({message:"Email and Password must not be empty"})
        }

        const userLogin= await user.findOne({email:email})
        if(userLogin){
            const isMatched=await bcrypt.compare(password,userLogin.password);
            const token=await userLogin.generateAuthToken();
            console.log(token);

            //storing token in cookie
            res.cookie("jwttoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            })


            

            if(!isMatched){
                res.status(404).json({result:"invalid credentials"})
            }
            else{
            res.status(404).json({result:"signedin sucessfully"})
            }
        }
        else{
            res.status(404).json({result:"invalid credentials"})
        }
    }


    catch(err){
        console.error(err);
    }

});



// router.get('/home',authenticate,(req,res)=>{
//     res.send(req.root);
// })


router.get('/about',authenticate,(req,res)=>{
    res.send(req.root);
})


module.exports=router;
