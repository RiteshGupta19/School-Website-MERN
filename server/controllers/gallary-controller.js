const Gallary = require('../model/gallary-model');

const uploadImage = async (req, res) => {
  try {
    const { category } = req.body;
    const imagePath = req.file.path.replace(/\\/g, "/"); // Replace backslashes with forward slashes

    const newImage = new Gallary({ imagePath, category });
    await newImage.save();

    res.status(201).json({ message: 'Image uploaded successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getImagesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const images = await Gallary.find({ category });

    if (images.length === 0) {
      return res.status(404).json({ message: 'No images found in this category' });
    }

    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteimagebyid=async(req,res,next)=>{
  try{
    const id=req.params.id;
    await Gallary.deleteOne({_id:id})
    res.status(200).json({msg:"Image deleted"})
  } catch(error){
    next(error);
    console.log({msg:"not delete"});
  }
}


module.exports = { uploadImage, getImagesByCategory ,deleteimagebyid};
