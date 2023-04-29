const mongoose = require("mongoose");
const Product = require("../models/product")

const getAllProducts = async(req, res) => {
    const Data = await Product.find();
    res.json(Data);

}
const getAllProductsTesting = async(req, res) => {
    res.status(200).json({})
}

module.exports = { getAllProducts, getAllProductsTesting }