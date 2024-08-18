const Topperlistmodel = require("../model/topperlist");

const topperlist = async (req, res, next) => {
  try {
    const { Name, Class, Year, Exam } = req.body;
    const photo = req.file.path; // Get the path of the uploaded file

    await Topperlistmodel.create({ photo, Name, Class, year: Year, Exam });

    res.status(201).json({ msg: "Topper information submitted successfully" });
  } catch (error) {
    console.error("Error in topperlist controller:", error);
    res.status(500).json({ msg: "Internal Server Error" });
    next(error);
  }
};

const getalltopperlist = async (req, res, next) => {
  try {
    const topper = await Topperlistmodel.find();
    if (!topper || topper.length === 0) {
      return res.status(404).json({ message: "No toppers found" });
    }
    return res.status(200).json(topper);
  } catch (error) {
    console.error("Error fetching toppers:", error);
    next(error);
  }
};

const deletetopperlistbyid = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Topperlistmodel.deleteOne({ _id: id });
    res.status(200).json({ msg: "Topper deleted successfully" });
  } catch (error) {
    console.error("Error deleting topper:", error);
    next(error);
  }
};
const updateTopperlist = async (req, res, next) => {
  try {
      const id = req.params.id;
      const { Name, Class, Year, Exam } = req.body;
      const photo = req.file ? req.file.path : null; // Get the path of the uploaded file if present

      // Find the topper and update details
      const updatedTopper = await Topperlistmodel.findByIdAndUpdate(
          id,
          { Name, Class, Year, Exam, photo },
          { new: true }
      );

      if (!updatedTopper) {
          return res.status(404).json({ message: 'Topper not found' });
      }

      res.status(200).json({ message: 'Topper updated successfully', topper: updatedTopper });
  } catch (error) {
      console.error('Error updating topper:', error);
      res.status(500).json({ message: 'Internal Server Error' });
      next(error);
  }
};


module.exports = { topperlist, getalltopperlist, deletetopperlistbyid ,updateTopperlist};
