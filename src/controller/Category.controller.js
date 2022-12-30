const { CategoryCreate } = require("../service/category.service");

const CreatedCategory = async (req, res) => {
    try {
        await CategoryCreate(req,res);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

module.exports = {
    CreatedCategory
}