const getAllProducts = async(req, res) => {
    res.status(200).json({ msg: "Hello" });
    res
}
const getAllProductsTesting = async(req, res) => {
    res.status(200).json({ msg: "Hello Testing    " })
}

module.exports = { getAllProducts, getAllProductsTesting }