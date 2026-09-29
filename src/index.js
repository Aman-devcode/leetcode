const  express=require('express');
const app=express();// express application create 
require('dotenv').config();// .env file ki variables ko process.env mein load karta hai
const cookieParser = require("cookie-parser");

app.use(express.json());// JSON data ko request body se read karne ke liye middleware
// Cookie ko read/parse karne ke liye middleware
app.use(cookieParser());
const connectDB=require('./config/db');// MongoDB connection function ko import kar rahe hain
const User=require('./models/user');
app.get("/",(req,res)=>{//Get/route(API endpoint ) define kiya
    res.json({
        message:'Leetcode plateform Backend is running sucessfully'
    })
})
connectDB()// Pehle MongoDB se connection establish hoga

// Agar MongoDB successfully connect ho gaya
.then(async()=>{
app.listen(process.env.PORT,()=>{// uske bad express server start at port 3000
    console.log('server running successfully:' +process.env.PORT);

})
})

// Agar connection mein error aaye
.catch(err=> console.log('Error is found'+err)
);