require("dotenv").config();
const express = require('express')
const router = require('./routes/product')
const app = express();
const mongoose = require('mongoose')
const connectDB = require('./db/connectdb')
const products_routes = require("./routes/product")
    // app.all('/', (req, res) => {
    //     console.log("Just got a request!")
    //     res.send('Yo HOello  am !')
    // })
app.use("/api/products", router)

const start = async() => {
    try {
        await connectDB();

    } catch (error) {

    }
}


app.listen(process.env.PORT || 3000)
start();