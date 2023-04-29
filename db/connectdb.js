require('dotenv').config()
const mongoose = require('mongoose');

const ConnectionParams = {
    useNewUrlParser: true,
    // userCreateIndex: true,
    useUnifiedTopology: true
}
const dbConnect = async() => {
    try {
        await mongoose.connect(process.env.DB_URI, ConnectionParams)
        console.log("Database Connected");
    } catch (error) {
        console.log(error.message)

    }
};

module.exports = dbConnect;