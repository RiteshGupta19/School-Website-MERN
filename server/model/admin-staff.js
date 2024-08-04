const mongoose=require("mongoose");


const Adminstaff=new mongoose.Schema({
  photo:{
    type:String,
    required:true,
  },
  description:{
    type:String,
    required:true,
  },
  name:{
    type:String,
    required:true,
  },
  post:{
    type:String,
    required:true,
  },
})

const Staff = new mongoose.model("Staff",Adminstaff);

module.exports=Staff;