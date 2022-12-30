const Category = require('../model/category.model');

const CategoryCreate = async(req,res) => {
    const category =  new Category({
        name: req.body.name
    })
    await category.save();
    res.status(201).json({
        success: true,
        data: 'Category created'
    })
}




module.exports = {
    CategoryCreate
}