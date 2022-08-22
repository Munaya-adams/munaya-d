const mongoose =require("mongoose");

const {Shema, model} =mongoose;

const ProductShema =new Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    Image: String,
    qnty: Number,
    isNewProduct: Boolean,
},  {
    timestamp: true
});


const Product = model("product", productShema);
module.exports =Product;