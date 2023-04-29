require("dotenv").config();
const express = require('express')
const app = express();
const path = require('path');

const filePath = path.join(__dirname, 'files');
const mongoose = require('mongoose')
const connectDB = require('./db/connectdb')
const products_routes = require("./routes/product")
const Product = require("./models/product");
const { randomBytes } = require("crypto");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.all('/', (req, res) => {
//     console.log("Just got a request!")
//     res.send('Yo HOello  am !')
// })
// app.use("/api/products", products_routes)

app.get('/', async(req, res) => {
    try {
        const { company, name, rating, price, sort } = req.query;
        const queryObject = {};
        if (company) {
            queryObject.company = { $regex: company, $options: "i" };
            // queryObject.company = company
        }
        if (name) {
            queryObject.name = { $regex: name, $options: "i" };
            // queryObject.name = name;
        }
        if (rating) {
            queryObject.rating = rating;
        }
        if (price) {
            queryObject.price = price;
        }

        let apiData = Product.find(queryObject);

        if (sort) {
            sortFix = sort.replace(",", " ");
            apiData = apiData.sort(sortFix)
        }
        const viewData = await apiData;
        // console.log(req.query)  

        res.send({ viewData });

    } catch (error) {
        res.status(500).send(error)
    }
})

app.post('/home', async(req, res) => {
    const { name, price, company, rating } = req.body;
    queryObject = {};
    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
        // queryObject.company = company
    }
    if (price) {
        queryObject.price = price;
        // queryObject.company = company
    }
    if (company) {
        queryObject.company = { $regex: company, $options: "i" };
        // queryObject.company = company
    }
    if (rating) {
        queryObject.rating = rating;
        // queryObject.company = company
    }
    const viewData = await Product.find(queryObject);
    console.log(queryObject, name)
    res.json({ viewData });

});

app.get('/home', (req, res) => {


    res.sendFile(`${filePath}/home.html`)
})


app.get('/register', async(req, res) => {
    res.sendFile(`${filePath}/register.html`)
});

app.post('/register', async(req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const rating = req.body.rating;
    const company = req.body.company;
    try {
        const newPost = await Product.create({ name, price, rating, company });
        res.send("<h2>User Has Been Added</h2>")
    } catch (error) {
        res.status(500).send(error)
    }
})





const start = async() => {
    try {
        await connectDB();

    } catch (error) {

    }
}


app.listen(process.env.PORT || 2000);

start();