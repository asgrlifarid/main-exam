const mongoose = require('mongoose');
const { Schema } = mongoose;

const prodSchema = new Schema({
  title: String, 
  imageUrl: String,
  price: Number,
  description: String ,

});
const ProductModel = mongoose.model('Products', prodSchema);
module.exports=ProductModel