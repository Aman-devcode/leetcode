// Mongoose library ko import kar rahe hain.
// Mongoose Node.js application ko MongoDB database se connect karne
// aur MongoDB ke saath data/models ke through kaam karne mein help karta hai.
const mongoose = require("mongoose");


// MongoDB connection ke liye ek async function bana rahe hain.
// async isliye kyunki database connection complete hone mein time lagta hai.
const connectDB = async () => {

    // try block mein woh code likhte hain jisme error aa sakta hai.
    try {

        // Mongoose ke through MongoDB Atlas se connection establish kar rahe hain.
        // process.env.MONGO_URI .env file se connection string lekar aata hai.
        // await ka matlab: connection complete hone tak wait karo.
        await mongoose.connect(process.env.DB_CONNECT_STRING);


        // Agar connection successfully ho gaya,
        // to ye message terminal mein print hoga.
        console.log("MongoDB Atlas Connected");


    // Agar try block mein koi error aata hai,
    // to control catch block mein aa jayega.
    } catch (error) {

        // Database connection fail hone par error ka message terminal mein print kar rahe hain.
        console.error("MongoDB connection failed:", error.message);


        // Application ko terminate kar rahe hain.
        // 1 ka matlab hai application error ke saath exit hui.
        throw error;
    }
};


// connectDB function ko doosri file mein use karne ke liye export kar rahe hain.
// Example: server.js mein require("./config/db") kar sakte hain.
module.exports = connectDB;