const {getAll} = require("../controllers/jobController");
const router=require('express').Router()
const authMiddleware=require('../helpers/authMiddleware')
router.route('/').get(authMiddleware,getAll)

module.exports=router