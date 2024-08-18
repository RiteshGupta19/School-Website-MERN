// Import required modules
const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../middleware/multer-middleware'); // Import multer middleware
const { topperlist, getalltopperlist, deletetopperlistbyid, updateTopperlist } = require("../controllers/topperController");

// Define routes
router.route('/topperlist')
    .post(uploadMiddleware, topperlist); 

router.route('/gettopperlist')
    .get(getalltopperlist);

router.route("/gettopperlist/delete/:id")
    .delete(deletetopperlistbyid);

router.route('/topperlist/:id') // Add this route for updating
    .put(uploadMiddleware, updateTopperlist);

module.exports = router;
