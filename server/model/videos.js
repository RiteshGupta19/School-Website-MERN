const mongoose=require("mongoose");


const videoschema=new mongoose.Schema({
  
  videourl:{
    type:String,
    required:true,
  },
})

const Video = new mongoose.model("Video",videoschema);

module.exports=Video;