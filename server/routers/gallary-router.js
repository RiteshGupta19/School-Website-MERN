const express = require('express');
const { uploadImage, getImagesByCategory ,deleteimagebyid } = require('../controllers/gallary-controller');
const uploadMiddleware = require('../middleware/gallary-middleware');

const router = express.Router();

router.post('/gallary', uploadMiddleware, uploadImage);
router.get('/gallary/:category', getImagesByCategory);
router.route("/gallary/delete/:id").delete( deleteimagebyid)


module.exports = router;
