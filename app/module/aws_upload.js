
const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");
const bucketName = process.env.AWS_BUCKET_NAME;
const path = process.env.AWS_BUCKET_NAME
const folder = "image_chat"
const region = "";
const accessKeyId = process.env.AWS_ACCESS_KEY;
const S3_ENDPOINT_URL=process.env.AWS_HOST;
const secretAccessKey = process.env.AWS_SECRET_KEY;
const s3 = new S3({
    apiVersion: 'latest',
    endpoint: `${S3_ENDPOINT_URL}${path}`,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
    },
});

// UPLOAD FILE TO S3*
function uploadFileS3(file) {
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: folder,
    Body: fileStream,
    ACL: 'public-read',
    Key: file.filename,
  };
return s3.upload(uploadParams).promise(); // this will upload file to S3
}

module.exports = {uploadFileS3};