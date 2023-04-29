require('dotenv').config()
const mongoose = require('mongoose');
const connectDB = async(uri) => {
    console.log("connected")

    return await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    });
}


module.exports = connectDB;