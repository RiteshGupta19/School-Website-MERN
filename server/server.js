require('dotenv').config();
const express = require("express")
const cors = require('cors')
const app=express();
const router=require("./routers/contact-router")
const connectdb=require("./utils/db");
const errormiddleware = require('./middleware/error-middleware');
const adminroute = require("./routers/admin-router")
const adminstaff = require("./routers/admin-staff")
const Video =require("./routers/admin-video")
const Gallary = require("./routers/gallary-router")
const upload=require("./middleware/multer-middleware")
const parentReviewRouter = require('./routers/parent-review-router.js');
const path=require("path")


const corsOption={
  origin:"http://localhost:5173",
  methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
  Credentials:true,
}
app.use(cors(corsOption));

app.use(express.json());

app.use('/uploads', express.static('uploads'));
app.use('/uploads/gallary', express.static('uploads/gallary'));
app.use('/uploads/videos', express.static(path.join(__dirname, 'uploads/videos')));;



app.use('/api/user',router);
app.use("/api/admin",adminroute)
app.use("/api/admin",adminstaff)
app.use("/api/admin",Video)
app.use("/api/admin",Gallary)
app.use("/api/admin",parentReviewRouter)

app.use(errormiddleware);


const PORT =5000;
 connectdb().then(()=>{
   app.listen(PORT,()=>{
     console.log(`server is running on port : ${PORT}`);
   })

 })

 module.exports = upload; // Export upload for use in routes
