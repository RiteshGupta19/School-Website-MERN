require('dotenv').config();
const express = require("express");
const cors = require('cors');
const app = express();
const router = require("./routers/contact-router");
const connectdb = require("./utils/db");
const errormiddleware = require('./middleware/error-middleware');
const adminroute = require("./routers/admin-router");
const adminstaff = require("./routers/admin-staff");
const Video = require("./routers/admin-video");
const Gallary = require("./routers/gallary-router");
const upload = require("./middleware/multer-middleware");
const parentReviewRouter = require('./routers/parent-review-router');
const path = require("path");
const Topperlistmodel = require('./routers/admin-topperlist');



// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});


const corsOption = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};

app.use(cors(corsOption));
app.use(express.json());

app.use('/uploads', express.static('uploads'));
app.use('/uploads/gallary', express.static('uploads/gallary'));
app.use('/uploads/topperlist', express.static('uploads/topperlist'));
app.use('/uploads/videos', express.static(path.join(__dirname, 'uploads/videos')));

app.use('/api/user', router);
app.use("/api/admin", adminroute);
app.use("/api/admin", adminstaff);
app.use("/api/admin", Video);
app.use("/api/admin", Gallary);
app.use("/api/admin", parentReviewRouter);
app.use("/api/admin", Topperlistmodel);

app.use(errormiddleware);

const PORT = process.env.PORT || 5000;
connectdb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});

module.exports = upload;
