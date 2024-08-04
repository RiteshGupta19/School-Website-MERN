const Adminstaff = require("../model/admin-staff")


const Staff = async (req, res,next) => {
  try {
    const { description,name,post} = req.body;
    const photo = req.file.path; // Get the path of the uploaded file

    await Adminstaff.create({ photo,description,name,post});

    res.status(201).json({ msg: "Staff information submitted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
    next(error)
  }

};

const getallstaff=async(req,res,next)=>{
  try{
    const stafff=await Adminstaff.find();
    if(!stafff || stafff.length===0){
      return res.status(404).json({message:"no users found"});
    }
    return res.status(200).json(stafff); 
  }catch(error){
    next(error);
  }
}

const deletestaffbyid=async(req,res,next)=>{
  try{
    const id=req.params.id;
    await Adminstaff.deleteOne({_id:id})
    res.status(200).json({msg:"staff deleted"})
  } catch(error){
    next(error);
  }
}

module.exports={Staff,getallstaff,deletestaffbyid}