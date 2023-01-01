const router = require("express").Router();
const {
  CreatedCategory,
  GetCategories,
  DeleteCategory,
} = require("../controller/Category.controller");

router.post("/", CreatedCategory);
router.get("/", GetCategories);
router.delete("/:id", DeleteCategory);


module.exports = router;