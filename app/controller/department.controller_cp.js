const db = require("../model");
const Department = db.departments;
const Division = db.divisions;
const Director = db.directors;


exports.createDepartment = (directorId, department) => {
  return Department.create({
    name: department.name,
    description: department.description,
    address: department.address,
    directorId: directorId,
  })
    .then((department) => {
      console.log(">> Created Department: " + JSON.stringify(department, null, 4));
      return department;
    })
    .catch((err) => {
      console.log(">> Error while creating department: ", err);
    });
};

// Create and Save new Comments
exports.createDivision = (departmentId, division) => {
  return Division.create({
    name: division.name,
    description: division.description,
    address: division.address,
    departmentId: departmentId,
  })
    .then((comment) => {
      console.log(">> Created Division: " + JSON.stringify(division, null, 4));
      return comment;
    })
    .catch((err) => {
      console.log(">> Error while creating Division: ", err);
    });
};


exports.findDirectorId = (directorId) => {
    return Director.findByPk(directorId, { include: ["departments"] })
      .then((director) => {
        return director;
      })
      .catch((err) => {
        console.log(">> Error while finding director: ", err);
      });
  };

// Get the comments for a given tutorial
exports.findDepartmentById = (departmentId) => {
  return Department.findByPk(departmentId, { include: ["director","division"] })
    .then((department) => {
      return department;
    })
    .catch((err) => {
      console.log(">> Error while finding department: ", err);
    });
};

// Get the comments for a given comment id
exports.findDivisionById = (id) => {
  return Division.findByPk(id, { include: ["department"] })
    .then((division) => {
      return division;
    })
    .catch((err) => {
      console.log(">> Error while finding division: ", err);
    });
};

// Get all Tutorials include comments
exports.findAll = () => {
  return Department.findAll({
    include: ["division"],
  }).then((departments) => {
    return departments;
  });
};
