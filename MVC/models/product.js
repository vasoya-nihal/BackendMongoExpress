const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    name:{
        type: String,
        required: true,
     
    },

    price:{
        type: Number,
        required: true,
     
    },

    description:{
        type: String,
        required: true,
     
    },

    category:{
        type: String,
        required: true,
     
    },

});

const ProductModel = model('Product', ProductSchema);

module.exports = ProductModel;

