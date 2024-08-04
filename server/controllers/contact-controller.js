const Contact=require("../model/contact-model")

const home= async(req,res)=>{
  try {
    res.status(201).send("homepage")
  } catch (error) {
    console.log(error);
  }
}

const contact = async (req, res,next) => {
  try {
    const { name, email, subject, comment } = req.body;

    const userExist = await Contact.findOne({ email });

    if (userExist) {
      return res.status(409).json({ message: "Email already exists" });
    }

    await Contact.create({ name, email, subject, comment });

    res.status(201).json({ msg: "Contact information submitted successfully" });
  } catch (error) {
    // res.status(500).json({ msg: "Internal Server Error" });
    next(error)
  }

};

module.exports={home,contact}