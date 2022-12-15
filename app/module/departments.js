const db = require("../model");
const Op = db.Sequelize.Op;
const Department = db.departments;
const {getPagination,getPagingData} = require("../helper/pagination");

function getAllByName(req) {
    const { page, size, name } = req.query;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    const { limit, offset } = getPagination(page, size);
    var isError = false;
    return Department.findAndCountAll({distinct:true, where: condition, include:[db.directors,db.divisions], limit, offset})
      .then(department => {
        if (!department) {
          return null;
        }
        const response = getPagingData(department, page, limit);
        return response;
      })
};

module.exports = {getAllByName}