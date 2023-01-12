const router = require("express").Router();
const {
  getAllproducts,
  GetIdProduct,
  productAdd,
  deleteProduct,
  getByCatIdProduct,
  findByIdAndUpdate
} = require("../controller/Product.controller");

router.get("/", getAllproducts);
router.get("/:id", GetIdProduct);
router.post("/", productAdd);
router.delete('/:id', deleteProduct)
router.get("/category/:id", getByCatIdProduct);
router.put('/:id', findByIdAndUpdate)


module.exports = router;
