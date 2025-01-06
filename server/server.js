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




//Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

const keyFilename = path.join(__dirname, './coastal-walker-441512-n0-e2d9d93089be.json');
// Creates a client
const storage = new Storage({ keyFilename });

async function getBucketMetadata() {

  const bucketName = 'susanskar_bucket19';

  // Get Bucket Metadata
  const [metadata] = await storage.bucket(bucketName).getMetadata();

  console.log(JSON.stringify(metadata, null, 2));
}

getBucketMetadata()

//gcp cors setup
const bucketName = 'susanskar_bucket19';

const origin = 'http://localhost:5001';

const responseHeader = 'Content-Type';

const maxAgeSeconds = 3600;

const method = 'GET';

async function configureBucketCors() {
    await storage.bucket(bucketName).setCorsConfiguration([
      {
        maxAgeSeconds,
        method: [method],
        origin: [origin],
        responseHeader: [responseHeader],
      },
    ]);
  
    console.log(`Bucket ${bucketName} was updated with a CORS config
        to allow ${method} requests from ${origin} sharing 
        ${responseHeader} responses across origins`);
  }
  
configureBucketCors().catch(console.error);
//gcp cors setup end












// Adjust CORS to allow localhost origin for development
const allowedOrigins = [
  "http://localhost:5173",   // Allow localhost for development
  // "http://35.200.236.161"    // For production (remove if not needed)
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
