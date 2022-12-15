const db = require("../model");
const Op = db.Sequelize.Op;
const Division = db.divisions;
const {getPagination,getPagingData} = require("../helper/pagination");

function getAllByName(req) {
  const { page, size, name } = req.query;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  const { limit, offset } = getPagination(page, size);
  var isError = false;
  return Division.findAndCountAll({distinct:true, where: condition, include:[db.departments], limit, offset})
    .then(division => {
      if (!division) {
        return null;
      }
      const response = getPagingData(division, page, limit);
      return response;
    })
}

module.exports = {getAllByName}