const Product = require("../model/product.model");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const GetAllProduct = async (req, res) => {
  const Products = await Product.find({});
  res.status(200).json({
    success: true,
    data: Products,
  });
};

const GetByIdProduct = async (req, res) => {
  const Product = await Product.findById({ _id: req.params.id });
  res.status(200).json({
    success: true,
    data: Product,
  });
};

const getProductByCategory = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.json({ error: "all filled must be required" });
  }
  let products = await Product.find({ category: id }).populate(
    "category"
  );
  res.status(200).json({
    success: true,
    data: products
  })
};

const ProductAdd = async (req, res) => {
  const file = req.files.file;
  const result = await cloudinary.uploader.upload(file.tempFilePath, {
    public_id: `${Date.now()}`,
    resource_type: "auto",
    folder: "images",
  });
  const newProduct = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: result.url,
  });
  await newProduct.save();
  res.status(201).json({
    success: true,
    data: "Product added",
  });
};

const DeleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    data: `Product delete ${req.params.id}`,
  });
};


const EditProduct = async(req,res)=>{
  await Product.findByIdAndUpdate(req.params.id, req.body)
}
module.exports = {
  GetAllProduct,
  GetByIdProduct,
  ProductAdd,
  DeleteProduct,
  getProductByCategory
  
};
