const mongoose=require('mongoose')
const jwt=require('jsonwebtoken');


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})


userSchema.methods.generateAuthToken=async function (){
    try{
        let userToken=jwt.sign({_id:this._id},process.env.SECRET)//generate token
        this.tokens=this.tokens.concat({token:userToken});//add token to db
        await this.save();
        return userToken;
    }catch(err){
        console.log(err);
    }
}





const User=mongoose.model('USER',userSchema)//creating collections

module.exports=User;