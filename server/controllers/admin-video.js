const Video = require("../model/videos")

const videos = async (req, res,next) => {
  try {
    const { videourl} = req.body;

    await Video.create({videourl});

    res.status(201).json({ msg: "video uploaded successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
    next(error)
    console.log({msg:error});
  }

};

const getallvideos=async(req,res,next)=>{
  try{
    const videoo=await Video.find();
    if(!videoo || videoo.length===0){
      return res.status(404).json({message:"no users found"});
    }
    return res.status(200).json(videoo); 
  }catch(error){
    next(error);
  }
}

const deletevideobyid=async(req,res,next)=>{
  try{
    const id=req.params.id;
    await Video.deleteOne({_id:id})
    res.status(200).json({msg:"video deleted"})
  } catch(error){
    next(error);
    console.log({msg:"not delete"});
  }
}


module.exports={videos,getallvideos,deletevideobyid}