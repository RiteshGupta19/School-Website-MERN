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




// Adjust CORS to allow localhost origin for development
const allowedOrigins = [
  // "http://localhost:5173",   // Allow localhost for development
  "http://35.200.236.161"    // For production (remove if not needed)
];

const corsOptions = {
  origin: function(origin, callback) {
    // Allow requests from localhost and production
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // No origin, allow
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};

app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

app.use(cors(corsOptions)); // Apply CORS with the updated options
app.use(express.json());

// Serve static files
app.use('/uploads', express.static('uploads'));
app.use('/uploads/gallary', express.static('uploads/gallary'));
app.use('/uploads/topperlist', express.static('uploads/topperlist'));
app.use('/uploads/videos', express.static(path.join(__dirname, 'uploads/videos')));

// API routes
app.use('/api/user', router);
app.use("/api/admin", adminroute);
app.use("/api/admin", adminstaff);
app.use("/api/admin", Video);
app.use("/api/admin", Gallary);
app.use("/api/admin", parentReviewRouter);
app.use("/api/admin", Topperlistmodel);

// Handle errors
app.use(errormiddleware);

// Connect to database and start server
const PORT = process.env.PORT || 5001;
connectdb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});

module.exports = upload;
