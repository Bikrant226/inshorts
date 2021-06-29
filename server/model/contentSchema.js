

const mongoose=require('mongoose');

const contentSchema=new mongoose.Schema({
    
    heading:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    linkname:{
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        default:Date
    }
})


const Content=mongoose.model('CONTENT',contentSchema);
module.exports=Content;