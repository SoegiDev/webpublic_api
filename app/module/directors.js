const db = require("../model");
const Op = db.Sequelize.Op;
const Director = db.directors;
const {getPagination,getPagingData} = require("../helper/pagination");

function getAllByName(req) {
    const { page, size, name } = req.query;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    const { limit, offset } = getPagination(page, size);
    var isError = false;
    return Director.findAndCountAll({distinct:true, where: condition, include:[db.departments], limit, offset})
      .then(director => {
        if (!director) {
          return null;
        }
        const response = getPagingData(director, page, limit);
        return response;
      })
};

module.exports = {getAllByName}