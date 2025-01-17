const ProductModel = require("../model/modelProduct");

const getProd = async (req, res) => {
    try {
        const products = await ProductModel.find({})
        res.status(200).json({ data: products, message: "success" })
    } catch (error) {
        res.status(500).send({ message: error.message });

    }
}
const getProdById = async (req, res) => {
    const { id } = req.params
    try {
        const product = await ProductModel.findById(id)

        res.status(200).json({ data: product, message: "success" })
    } catch (error) {
        res.status(500).send({ message: error.message });

    }
}
 deleteProd = async (req, res) => {
    const { id } = req.params
    try {
        deletedProduct = await ProductModel.findOneAndDelete(id)
        const products = await ProductModel.findById({})

        res.status(200).json({ deletedProduct: deletedProduct, message: "success", data: products })
    } catch (error) {
        res.status(500).send({ message: error.message });

    }
}
postProd = async (req, res) => {
    try {
        const newProd = ProductModel({ ...req.body })
        await newProd.save()
        res.status(200).json({ newProd: newProd, message: "successfully added" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

module.exports = { postProd, deleteProd, getProd, getProdById }