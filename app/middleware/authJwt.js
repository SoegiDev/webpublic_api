const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../model");
const User = db.user;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isDirector = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "director") {
          next();
          return;
        }
      }
      if (user.isAdmin === true){
        next();
        return
      }
      res.status(403).send({
        message: "Require Director Role!"
      });
      return;
    });
  });
};

isDivision = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "division") {
          next();
          return;
        }
      }
      if (user.isAdmin === true){
        next();
        return
      }

      res.status(403).send({
        message: "Require Division Role!"
      });
    });
  });
};

isDepartment = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "department") {
          next();
          return;
        }
      }
      if (user.isAdmin === true){
        next();
        return
      }
      res.status(403).send({
        message: "Require Department Role!"
      });
    });
  });
};


isEmployee = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "employee") {
            next();
            return;
          }
        }
        if (user.isAdmin === true){
          next();
          return
        }
        res.status(403).send({
          message: "Require Employee Role!"
        });
      });
    });
  };
  

isAllRoles = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "director") {
            next();
            return;
          }
  
          if (roles[i].name === "manager") {
            next();
            return;
          }
          if (roles[i].name === "assistant manager") {
            next();
            return;
          }
          if (roles[i].name === "supervisor") {
            next();
            return;
          }
          if (roles[i].name === "staff") {
            next();
            return;
          }
        }
        if (user.isAdmin === true){
          next();
          return
        }
  
        res.status(403).send({
          message: "Require Director or Division or Department or employee Role!"
        });
      });
    });
  };

const authJwt = {
  verifyToken: verifyToken,
  isDirector: isDirector,
  isDivision: isDivision,
  isDepartment: isDepartment,
  isAllRoles :isAllRoles
};
module.exports = authJwt;