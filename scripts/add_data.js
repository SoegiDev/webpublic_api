const db = require("../app/model");
const Op = db.Sequelize.Op;
var bcrypt = require("bcryptjs");
const uuid = require('uuid');
function addRole() {
    const roleAdd = [
        {
          id: 1,
          name: "director"
        },
        {
          id: 2,
          name: "manager"
        },
        {
          id: 3,
          name: "assistant manager"
        },
        {
          id: 4,
          name: "supervisor"
        },
        {
          id: 5,
          name: "staff"
        }
      ]
    db.role.bulkCreate(roleAdd);
}

function addDirector() {
  const dt = [
      {
        name: "Main Director",
        description: "Main Director Description",
      },
      {
        name: "Finance Director",
  description: "Finance Director Description",
      },
      {
        name: "Operational Director",
        description: "Operational Director Description",
      }
    ]
  db.directors.bulkCreate(dt);
}
function addDepartment() {
  const Department = db.departments;
  const dt = [
      {
        name: "Accounting Department",
        description: "Accounting Department",
        
      },
      {
        name: "ICT Departments",
        description: "ICT Departments",
      },
      {
        name: "Treasury Departments",
        description: "Treasury Departments",
      },
      {
        name: "Operasional Departments",
        description: "Treasury Departments",
      },
      {
        name: "HR Departments",
        description: "HR Departments",
      }
    ]
    dt.forEach(dd => {
      Department.create(
        dd).then(department => {
          department.setDirectors([1,2,3]);
        })
    })
  
}

function addDivision() {
  const Division = db.divisions;
  const dt = [
      {
        name: "Finance Division",
        description: "Finance Division",
        
      },
      {
        name: "Budgeting Division",
        description: "Budgeting Division",
      },
      {
        name: "Developer Division",
        description: "Developer Division",
      },
      {
        name: "SAP Division",
        description: "SAP Division",
      },
      {
        name: "SAS Division",
        description: "SAS Division",
      },
      {
        name: "Garden Division",
        description: "Garden Division",
      },
      ,
      {
        name: "Admin Division",
        description: "Admin Division",
      }
    ]
    dt.forEach(dd => {
      Division.create(
        dd).then(division => {
          division.setDepartments([1,2,3,4,5]);
        })
    })
  
}

function addAdmin(){
  const userdata = {
    id:uuid.v4(),
    username: 'admin',
    email: 'admin_web@gmail.com',
    password: bcrypt.hashSync('admin12345', 8),
    isAdmin:true
  }
  db.user.create(userdata)
}
module.exports = {
    addRole,
    addDirector,
    addDepartment,
    addDivision,
    addAdmin
  }


  //node -e 'require("./scripts/add_role.js").addRole()'