// const Product = require('../models/ProductModel');
const Product = require('../models/product'); 


const getProducts = async (req, res) => {
    try{
        const allProducts = await Product.find();

        if(!allProducts || allProducts.length == 0){{
            return res.status(404).json({
                success: false,
                message: 'No products found'
            })
            
      
    }         
       
        }
        else{
              res.status(200).json({
            success: true,
            data: allProducts
        }
        )
        }

    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message});
    }

}

const createProduct = async (req, res) => {
    try{
const {name, price, description, category} = req.body;

const newProduct = new Product({
    name,price, description, category
})
await newProduct.save();
res.status(201).json({
    success: true,
    product: newProduct
})

    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message});
    }
}


const updateProduct = async (req, res) => {
    try{
        const { id } = req.params;
        const {name, price, description, category} = req.body;

        const updateProduct = await Product.findByIdAndUpdate(id,{
            name,price, description, category
        },{new : true})
res.status(200).json({
    success: true,
    product: updateProduct
})
    }
     catch(error){
        res.status(500).json({
            success: false,
            message: error.message});
    }
}


const deleteProduct = async (req, res) => {
    try{
const { id } = req.params;

const deleteProduct = await Product.findByIdAndDelete(id);
if( !deleteProduct){
    res.json({
        success: false,
        message: 'Product not found'
    })
}
res.status(200).json({
    success: true,
    message: 'Product deleted successfully'
})
    }

     catch(error){
        res.status(500).json({
            success: false,
            message: error.message});
    }
}



// module.exports = {getProducts};
 module.exports = {getProducts, createProduct, updateProduct, deleteProduct};