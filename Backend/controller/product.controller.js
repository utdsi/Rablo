
const {ProductModel}  = require("../model/product.model")


const addproduct = async (req,res)=>{

    const payload = req.body

    try {
        const product = new ProductModel(payload)
        await product.save()
        res.status(200).send({"msg":"Product added successfully"})
    } catch (error) {
        res.status(500).send({"msg":"Internal"})
    }
}

const getallproduct = async (req,res)=>{

    

    try {
        const product = await ProductModel.find()
        
        res.status(200).send({"msg":product})
    } catch (error) {
        res.status(500).send({"msg":"Internal"})
    }
}

const updateProduct = async (req,res)=>{


    const payload = req.body
    const id = req.params.id
    try {
        await ProductModel.findByIdAndUpdate({_id:id},payload)

    res.status(200).send({"msg":"product updated successfully"})
    } catch (error) {
        res.status(500).send({"msg":"Internal"})
    }
}

const deleteProduct = async (req,res)=>{

    const id = req.params.id
    try {
        await ProductModel.ffindByIdAndDelete({_id:id})

    res.status(200).send({"msg":"product deleted successfully"})
    } catch (error) {
        res.status(500).send({"msg":"Internal"})
    }
}

const featuredProduct = async (req,res)=>{

    try {
        const products = await ProductModel.find({featured:true})
        res.status(200).send({"msg":products})

    } catch (error) {
        res.status(500).send({"msg":"Internal"})
    }
}

const getPriceWiseProduct = async (req,res)=>{
    const {price} = req.body
    try {
        const products = await ProductModel.find({price: { $lt: price } })
        res.status(200).send({"msg":products})

    } catch (error) {
        res.status(500).send({"msg":"Internal"})
    }
}

const getByRating = async(req,res)=>{

    const {rating} = req.body

    try {
        const products = await ProductModel.find({rating: { $gt: rating } })
    } catch (error) {
        
    }
}

module.exports = {addproduct,getallproduct,getByRating,getPriceWiseProduct,featuredProduct,updateProduct,deleteProduct}

