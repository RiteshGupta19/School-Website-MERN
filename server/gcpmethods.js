// const path = require('path');
// const { v4: uuidv4 } = require('uuid');
// const { Storage } = require('@google-cloud/storage');

// const keyFilename = path.join(__dirname, '../coastal-walker-441512-n0-e2d9d93089be.json');
// const storage = new Storage({ keyFilename });
// const bucketName = process.env.GCS_BUCKET_NAME;
// const bucket = storage.bucket(bucketName);

// const deleteFromGCS = (filePath) => {
//   return new Promise((resolve, reject) => {
//     const fileInstance = bucket.file(filePath);

//     fileInstance.delete((err) => {
//       if (err) {
//         reject('Error deleting file');
//       } else {
//         resolve();
//       }
//     });
//   });
// };

// const getSignedUrl = async (filePath) => {
//   const Path = filePath.replace(`https://storage.googleapis.com/${bucketName}/`, '');
//   const file = bucket.file(Path);
//   const signedUrlConfig = {
//     version: 'v4',
//     action: 'read',
//     expires: Date.now() + 5 * 60 * 1000, // 5 minutes from now
//     responseCacheControl: 'no-cache',
//   };
//   const [url] = await file.getSignedUrl(signedUrlConfig);

//   return url;
// };

// const downloadres = async (req, res) => {
//   const { url } = req.body;
//   try {
//     const baseUrl = `https://storage.googleapis.com/${bucketName}/`;
//     const filePath = decodeURIComponent(url.replace(baseUrl, '').split('?')[0]);
//     const signedUrl = await getSignedUrl(filePath);
//     res.json({ url: signedUrl });
//   } catch (err) {
//     res.status(500).send('Error generating signed URL for download');
//   }
// };

// module.exports = { deleteFromGCS, bucket, getSignedUrl, bucketName, downloadres };
