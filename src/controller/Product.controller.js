const {
  ProductAdd,
  GetAllProduct,
  GetByIdProduct,
  DeleteProduct,
  getProductByCategory,
  EditProduct
} = require("../service/product.service");

const getAllproducts = async (req, res) => {
  try {
    await GetAllProduct(req, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const GetIdProduct = async (req, res) => {
  try {
    await GetByIdProduct(req, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const productAdd = async (req, res) => {
  try {
    await ProductAdd(req, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteProduct = async(req,res)=>{
    try {
        await DeleteProduct(req,res);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

const getByCatIdProduct =  async(req,res)=>{
    try {
        await getProductByCategory(req,res);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}


const findByIdAndUpdate = async(req,res) => {
  try {
    await EditProduct(req,res)
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
  })
  }
}
module.exports = {
  getAllproducts,
  GetIdProduct,
  productAdd,
  deleteProduct,
  getByCatIdProduct,
  findByIdAndUpdate
};
