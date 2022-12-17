const db = require("../model");
const Op = db.Sequelize.Op;
const News = db.article;
const {getPagination,getPagingData} = require("../helper/pagination");
const uuid = require('uuid');
const { article } = require("../model");
function addNews(req,images) {
    console.log(req.body.description,req.body.content,req.body.name)
    return News.create({
        id:uuid.v4(),
        description: req.body.description,
        picture: images,
        content: req.body.content,
        userId:req.userId
      }).then(article => {  
        if (req.body.tags) {
          db.tag.findAll({
            where: {
              name: {
                [Op.or]: JSON.parse(req.body.tags)
              }
            }
          }).then(tags => {
            article.setTags(tags).then(() => {
            });
          });
        }
        return article;
      })
};
function getAll(req) {
  const { page, size, tag } = req.query;
  var condition = tag ? { tag:  { [Op.like]: `%${tag}%` } } : null;
  const { limit, offset } = getPagination(page, size);
  var isError = false;
  return News.findAndCountAll({distinct:true, where: condition, include:[db.user,db.tag], limit, offset})
    .then(news => {
      if (!news) {
        return null;
      }
      const response = getPagingData(news, page, limit);
      return response;
    })
};

module.exports = {addNews,getAll}