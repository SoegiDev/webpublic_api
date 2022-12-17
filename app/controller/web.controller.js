const db = require("../model");
const Op = db.Sequelize.Op;
const {getPagination,getPagingData} = require("../helper/pagination");
const News = require("../module/articles");
const { uploadFileS3, getFileStream } = require("../module/aws_upload");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

module.exports.postAddNews =  async (req, res, next) => {
    // uploading to AWS S3
    const result = await uploadFileS3(req.file);
    console.log("S3 response", result);
    // You may apply filter, resize image before sending to client
    // Deleting from local if uploaded in S3 bucket
    await unlinkFile(req.file.path);
    console.log("Hasil Upload ",result)
    News.addNews(req,result.Location).then((response) => {
        if(response){
            res.send(response);
        }
        else{
          res.status(404).send({ message: "Problems in Add News Data Types." });
        }
        console.log("hasil",response)
      }).catch(err => next(err));

  };
  