//Importing needed libraries and dependencies
const mongoose = require('mongoose');
require('dotenv').config();

//Connecting MongoDB via Mongoose
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB Connection Failed:', error);
        process.exit(1);
    }
};

//Exporting the module
module.exports = connectDB;