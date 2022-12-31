const router = require('express').Router();
const {CreatedCategory, GetCategories} = require('../controller/Category.controller')

router.post('/', CreatedCategory);
router.get('/', GetCategories);

module.exports = router;