const express = require('express')
const router=express.Router();
const {home,contact} = require("../controllers/contact-controller")
const validate = require("../middleware/contact-middleware")
const contactschema=require("../validators/contact-validator")

router.route('/').get(home)
router.route('/contact').post(validate(contactschema), contact);

module.exports=router;