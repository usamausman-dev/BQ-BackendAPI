const { Brand } = require('./model')
const { connect } = require('mongoose')
require('dotenv').config()

const AddBrand = async (req, res) => {
    const { BrandName, BrandImage } = req.body
    if (!BrandName || !BrandImage) {
        res.json({
            message: "Please Insert Proper Values"
        })
    }

    else {
        try {
            await connect(process.env.MONGO_URI)
            console.log("DB Connected")

            await Brand.create({ BrandName, BrandImage })
            const brands = await Brand.find()
            res.status(201).json({
                message: "Brand Created Successfully",
                brands: brands
            })
        }

        catch (error) {
            res.json({
                message: error.message
            })
        }
    }
}

const brandByID = (req, res) => {
    res.json({
        message: "Done"
    })

}

const getAllBrands = async (req, res) => {
    try {
        await connect(process.env.MONGO_URI)
        console.log("DB Connected")

        const brands = await Brand.find()
        res.status(200).json({
            brands
        })
    }

    catch (error) {
        res.json({
            message: error.message
        })
    }

}

module.exports = { AddBrand, brandByID, getAllBrands }