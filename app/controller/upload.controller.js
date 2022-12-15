// S3 STORAGE //
const { uploadFileS3, getFileStream } = require("../module/aws_upload");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
module.exports.uploadImageAws = async (req, res, next) => {
    console.log(req.file);
  
    // uploading to AWS S3
    const result = await uploadFileS3(req.file);
    console.log("S3 response", result);
    // You may apply filter, resize image before sending to client
    // Deleting from local if uploaded in S3 bucket
    await unlinkFile(req.file.path);
  
    res.send({
      status: "success",
      message: "File uploaded successfully",
      data: result,
    });
  };