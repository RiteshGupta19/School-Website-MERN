const Contact=require("../model/contact-model")
const Staff = require('../model/admin-staff')


const getallcontact=async(req,res,next)=>{
  try{
    const contacts=await Contact.find();
    console.log(contacts)
    if(!contacts || contacts.length===0){
      return res.status(404).json({message:"no users found"});
    }
    return res.status(200).json(contacts); 
  }catch(error){
    next(error);
  }
}

const deletecontactbyid=async(req,res,next)=>{
  try{
    const id=req.params.id;
    await Contact.deleteOne({_id:id})
    res.status(200).json({msg:"user deleted"})
  } catch(error){
    next(error);
  }
}




module.exports = {getallcontact,deletecontactbyid};