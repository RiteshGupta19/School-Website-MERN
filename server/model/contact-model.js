const mongoose=require("mongoose");


const contactschema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  subject:{
    type:String,
    required:true,
  },
  comment:{
    type:String,
    required:true,
  },
})

const Contact = new mongoose.model("Contact",contactschema);

module.exports=Contact;