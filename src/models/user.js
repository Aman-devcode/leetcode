const mongoose=require('mongoose');
const {Schema}=mongoose;// mongoose sein schema ko laya 
const userSchema=new Schema({
    firstName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:20,
    },
    lastName:{
        type:String,
        minLength:3,
        maxLength:20,
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        immutable:true,
    },
    age:{
        type:String,
        min:6,
        max:70,

    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'

    },
    problemSolved:{
        type:[String],

    },
    password:{
        type:'string',
        required:true,
        minLength:4,
        maxLength:8,

    }
},
{
timestamps:true,
});
const User=mongoose.model('user',userSchema);
module.exports=User;

