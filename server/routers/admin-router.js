const express = require('express');
const {getallcontact,deletecontactbyid} = require('../controllers/admin-controller');
const router=express.Router();

router.route('/contacts').get(getallcontact);
router.route("/contacts/delete/:id").delete( deletecontactbyid)


module.exports = router;