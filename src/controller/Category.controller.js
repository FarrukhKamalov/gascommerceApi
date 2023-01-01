const {
  CategoryCreate,
  CategoriesGet,
  categoryDelete,
} = require("../service/category.service");

const CreatedCategory = async (req, res) => {
  try {
    await CategoryCreate(req, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const GetCategories = async (req, res) => {
  try {
    await CategoriesGet(req, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const DeleteCategory = async (req, res) => {
  try {
    await categoryDelete(req,res);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  CreatedCategory,
  GetCategories,
  DeleteCategory
};
