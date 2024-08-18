// Import required modules
const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../middleware/multer-middleware');
const { topperlist, getalltopperlist, deletetopperlistbyid, updateTopperlist } = require("../controllers/topperController");

router.route('/topperlist')
    .post(uploadMiddleware, topperlist); 

router.route('/gettopperlist')
    .get(getalltopperlist);

router.route("/gettopperlist/delete/:id")
    .delete(deletetopperlistbyid);

router.route('/topperlist/:id') 
    .put(uploadMiddleware, updateTopperlist);

module.exports = router;
