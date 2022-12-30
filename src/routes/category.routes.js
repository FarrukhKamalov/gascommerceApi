const router = require('express').Router();
const {CreatedCategory} = require('../controller/Category.controller')

router.post('/', CreatedCategory)


module.exports = router;