const { Storage } = require('@google-cloud/storage');
const path = require('path');

// Configure Google Cloud Storage
const storage = new Storage({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

const bucket = storage.bucket(process.env.GCS_BUCKET_NAME);

const uploadMiddleware = (req, res, next) => {
  const multer = require('multer');
  const multerStorage = multer.memoryStorage(); // Store files temporarily in memory

  const upload = multer({ storage: multerStorage }).single('photo');

  upload(req, res, async (err) => {
    if (err) return res.status(500).json({ message: 'Multer error', error: err });

    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    try {
      const blob = bucket.file(`${Date.now()}-${req.file.originalname}`);
      const blobStream = blob.createWriteStream();

      blobStream.on('error', (err) => {
        next(err);
      });

      blobStream.on('finish', async () => {
        req.file.cloudStoragePublicUrl = `https://storage.googleapis.com/${process.env.GCS_BUCKET_NAME}/${blob.name}`;
        next();
      });

      blobStream.end(req.file.buffer);
    } catch (error) {
      next(error);
    }
  });
};

module.exports = uploadMiddleware;
