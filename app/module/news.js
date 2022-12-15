const db = require("../model");
const Op = db.Sequelize.Op;
const News = db.news;
const {getPagination,getPagingData} = require("../helper/pagination");
const uuid = require('uuid');
function addNews(req,images) {
    console.log(req.body.description,req.body.content,req.body.name)
    return News.create({
        id:uuid.v4(),
        description: req.body.description,
        picture: images,
        tags:req.body.tags,
        content: req.body.content,
        userId:req.userId
      }).then(news => {
        if (!news) {
          return null;
        }
        return news;
      })
};

module.exports = {addNews}