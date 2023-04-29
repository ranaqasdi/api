require("dotenv").config();
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const connectDB = require('./db/connectdb')
const products_routes = require("./routes/product")
const Product = require("./models/product")

// app.all('/', (req, res) => {
//     console.log("Just got a request!")
//     res.send('Yo HOello  am !')
// })
// app.use("/api/products", products_routes)

app.get('/', async(req, res) => {
    try {
        const viewData = await Product.find();
        res.json(viewData);
    } catch (error) {
        res.status(500).send(error)
    }
})


con



const start = async() => {
    try {
        await connectDB();

    } catch (error) {

    }
}


app.listen(process.env.PORT || 2000)
start();