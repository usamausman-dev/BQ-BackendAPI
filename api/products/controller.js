const getProducts = (req, res) => {
    res.json({
        products: []
    })
}


const postProducts = (req, res) => {
    res.json({
        message: "Product Added Successfully"
    })

}


module.exports = { getProducts, postProducts }