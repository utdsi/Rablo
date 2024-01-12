

const express = require("express")

const productRouter = express.Router()

const { addproduct, getallproduct, updateProduct, deleteProduct, featuredProduct, getPriceWiseProduct, getByRating } = require("../controller/product.controller")
const { auth } = require("../middleware/auth")


productRouter.post("/addproduct", auth, addproduct)
productRouter.get("/all", auth, getallproduct)
productRouter.patch("/edit", auth, updateProduct)
productRouter.delete("/del", auth, deleteProduct)
productRouter.get("/featured", auth, featuredProduct)
productRouter.get("/price", auth, getPriceWiseProduct)
productRouter.get("/rating", auth, getByRating)


module.exports = { productRouter }