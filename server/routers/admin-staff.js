const express = require('express')
const router=express.Router();
const uploadMiddleware = require('../middleware/multer-middleware'); // Import multer middleware
const {Staff,getallstaff,deletestaffbyid} = require("../controllers/admin-staff")

router.route('/staff').post(uploadMiddleware, Staff); 
router.route('/getstaff').get(getallstaff);
router.route("/getstaff/delete/:id").delete( deletestaffbyid)


module.exports=router;  