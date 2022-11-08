const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const product_info = new Schema( {
    productname: String,
    cost: Number,
    color:String,
    Avilability:[],
    Quantity:Number,
    Rating: Number
 });

 module.exports = mongoose.model('product_info',product_info);
