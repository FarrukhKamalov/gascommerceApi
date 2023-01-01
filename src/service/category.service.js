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

const CategoriesGet = async(req,res)=>{
    const Categories = await Category.find({});

    res.status(200).json({
        success: true,
        data: Categories
    })
}

const categoryDelete = async(req,res)=>{
    const category = await Category.findByIdAndDelete({_id: req.params.id});

    res.status(200).json({
        status: true,
        data: `DELETE category:  ${category.name}`
    })

}




module.exports = {
    CategoryCreate,
    CategoriesGet,
    categoryDelete
}