require('dotenv').config()
const mongoose = require('mongoose');

const ConnectionParams = {
    useNewUrlParser: true,
    // userCreateIndex: true,
    useUnifiedTopology: true
}


const DB_URI = 'mongodb://rqa166:QasidRana001@ac-rjrdmqj-shard-00-00.mevtfbk.mongodb.net:27017,ac-rjrdmqj-shard-00-01.mevtfbk.mongodb.net:27017,ac-rjrdmqj-shard-00-02.mevtfbk.mongodb.net:27017/nodejs1?ssl=true&replicaSet=atlas-dqcsrj-shard-0&authSource=admin&retryWrites=true&w=majority'

const dbConnect = async() => {
    try {
        await mongoose.connect(DB_URI, ConnectionParams)
        console.log("Database Connected");
    } catch (error) {
        console.log(error.message)

    }
};

module.exports = dbConnect;