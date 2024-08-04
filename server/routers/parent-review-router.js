const express = require('express');
const router = express.Router();
const upload = require('../middleware/parent-review');
const { uploadVideo, getVideos,deletevideobyid } = require('../controllers/p-review-controller');

// POST upload a video
router.post('/upload', upload, uploadVideo);

// GET all uploaded videos
router.get('/upload', getVideos);
router.route("/upload/delete/:id").delete( deletevideobyid)


module.exports = router;
