const mongoose = require("mongoose")

const getAllProducts = async(req, res) => {
    mongoose.find({});
    res.status(200);
    res
}
const getAllProductsTesting = async(req, res) => {
    res.status(200).js
}

module.exports = { getAllProducts, getAllProductsTesting }