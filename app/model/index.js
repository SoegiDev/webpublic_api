const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.departments = require("./department.model.js")(sequelize, Sequelize);
db.divisions = require("./division.model.js")(sequelize, Sequelize);
db.directors = require("./director.model.js")(sequelize, Sequelize);
db.user = require("../model/user.model.js")(sequelize, Sequelize);
db.user_profile = require("../model/user_profile.model.js")(sequelize, Sequelize);
db.role = require("../model/role.model.js")(sequelize, Sequelize);
db.user_roles =  require("../model/user_roles.model.js")(sequelize, Sequelize);
db.div_depart = require("../model/div_depart.model.js")(sequelize, Sequelize);
db.depart_director = require("../model/depart_director.js")(sequelize, Sequelize);
db.news = require("../model/news.model")(sequelize, Sequelize);
db.settings = require("../model/settings.model")(sequelize, Sequelize);

db.news.hasMany(db.user);
db.user.belongsTo(db.news);
db.user.belongsTo(db.departments);
db.departments.hasMany(db.user);
db.user.belongsTo(db.directors);
db.directors.hasMany(db.user);
db.user.belongsTo(db.divisions);
db.divisions.hasMany(db.user);
db.user.hasOne(db.user_profile);
db.user_profile.belongsTo(db.user);
db.departments.belongsToMany(db.directors, { through: db.depart_director });
db.directors.belongsToMany(db.departments, { through: db.depart_director });
db.divisions.belongsToMany(db.departments, { through: db.div_depart });
db.departments.belongsToMany(db.divisions, { through: db.div_depart });
db.role.belongsToMany(db.user, { through: db.user_roles });
db.user.belongsToMany(db.role, { through: db.user_roles });

module.exports = db;
