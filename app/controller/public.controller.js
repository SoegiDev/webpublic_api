const db = require("../model");
const Op = db.Sequelize.Op;
const {getPagination,getPagingData} = require("../helper/pagination");
const departments = require("../module/departments");
const directors = require("../module/directors")
const users = require("../module/employees")
const divisions = require("../module/divisions")
const news = require("../module/articles")

module.exports.getDepartment = (req, res,next) => {
  departments.getAllByName(req).then((response) => {
    if(response){
        res.send(response);
    }
    else{
      res.status(404).send({ message: "Problems in Department Data Types." });
    }
    console.log("hasil",response)
  }).catch(err => next(err));
  // departments.getAllByName(req).then(response => res.json(response)).catch(err => next(err));
  };
  
module.exports.getDirector = (req, res) => {
  directors.getAllByName(req).then((response) => {
    if(response){
        res.send(response);
    }
    else{
      res.status(404).send({ message: "Problems in Directors Data Types." });
    }
    console.log("hasil",response)
  }).catch(err => next(err));
  // departments.getAllByName(req).then(response => res.json(response)).catch(err => next(err));
};

module.exports.getDivision = (req, res) => {
  divisions.getAllByName(req).then((response) => {
    if(response){
      res.send(response);
    }
    else{
      res.status(404).send({ message: "Problems in Divisions Data Types." });
    }
    console.log("hasil",response)
  }).catch(err => next(err));
    // departments.getAllByName(req).then(response => res.json(response)).catch(err => next(err));
};

module.exports.getEmployee = (req, res) => {
  users.getAll(req).then((response) => {
    if(response){
      res.send(response);
    }
    else{
        res.status(404).send({ message: "Problems in Employee Data Types." });
    }
    console.log("hasil",response)
  }).catch(err => next(err));    
};

module.exports.getNews = (req, res,next) => {
  news.getAll(req).then((response) => {
    if(response){
      res.send(response);
    }
    else{
        res.status(404).send({ message: "Problems in News Data Types." });
    }
    console.log("hasil",response)
  }).catch(err => next(err));    
};
  