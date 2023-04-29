const connectDB = require("./db/connectdb");
//for local db
// const connectDB = require("./db/connectdblocal");
const productModel = require("./models/product")
const productjson = require("./products.json")
const start = async() => {
    try {
        await connectDB();
        //for local db
        // await connectDB();
        await productModel.create(productjson);
        console.log("success");
    } catch (error) {
        console.log(error)
    }
}

start();