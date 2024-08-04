const express = require('express')
const router=express.Router();
const {videos ,getallvideos,deletevideobyid}= require("../controllers/admin-video")

router.route('/videos').post(videos); // Use the middleware
router.route('/getvideos').get(getallvideos);
router.route("/getvideos/delete/:id").delete( deletevideobyid)


module.exports=router;  