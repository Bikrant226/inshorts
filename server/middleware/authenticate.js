const jwt=require('jsonwebtoken');
const User=require('../model/userSchema');

const Authenticate=async(req,res,next)=>{
    try{

        const token=req.cookies.jwttoken;
        const verifyToken=jwt.verify(token,process.env.SECRET);

        const root=await User.findOne({_id:verifyToken._id,"tokens.token":token})
        if (!root){
            throw new Error('user not found')
        }

        req.token=token;
        req.root=root;
        req.userId=root._id;
        next();
    }catch(err){
        res.status(401).send('Unauthorized user');
        console.log(err);
    }
}

module.exports=Authenticate;