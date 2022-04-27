const {getAll, createJob, deleteJob, updateJob} = require("../controllers/jobController");
const router=require('express').Router()
const authMiddleware=require('../helpers/authMiddleware')

router.route('/').get(getAll).post(authMiddleware,createJob)
router.route('/:id').delete(authMiddleware,deleteJob).patch(authMiddleware,updateJob)

module.exports=router