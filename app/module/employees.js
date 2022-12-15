const db = require("../model");
const Op = db.Sequelize.Op;
const User = db.user;
const {getPagination,getPagingData} = require("../helper/pagination");

function getAll(req) {
  const { page, size, type } = req.query;
  let cond = null
  if(type!=null){
    if (type==="employee")cond = {isEmployee: true}
    if (type==="owner")cond = {isOwner: true}
    if (type==="commissioner")cond = {isCommissioner: true}
    if (type==="director")cond = {isDirector: true}
    if (type==="manager")cond = {isManager: true}
    if (type==="admin")cond = {isAdmin: true}
  }
  const { limit, offset } = getPagination(page, size);
  return User.findAndCountAll({distinct:true, where: cond, include:[db.divisions,db.directors,db.departments], limit, offset})
  .then(director => {
    if (!director) {
      return null;
    }
    const response = getPagingData(director, page, limit);
    return response;
  })
};

module.exports = {getAll}