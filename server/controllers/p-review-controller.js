const Parent_Review = require('../model/parent-review');

const uploadVideo = async (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const videoUrl = `/uploads/videos/${file.filename}`;
        const video = new Parent_Review({ videourl: videoUrl });
        await video.save();

        res.status(201).json({ videoUrl });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error uploading video' });
    }
};

const getVideos = async (req, res) => {
    try {
        const videos = await Parent_Review.find();
        res.status(200).json(videos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching videos' });
    }
};

const deletevideobyid=async(req,res,next)=>{
    try{
      const id=req.params.id;
      await Parent_Review.deleteOne({_id:id})
      res.status(200).json({msg:"video deleted"})
    } catch(error){
      next(error);
      console.log({msg:"not delete"});
    }
  }
  

module.exports = { uploadVideo, getVideos ,deletevideobyid};
