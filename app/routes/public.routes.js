const { authJwt } = require("../middleware");
const {getDepartment,getDirector, getDivision, getEmployee, getNews} = require("../controller/public.controller");
const router = require("express").Router();
router.use((req, res, next) => {
  next();
});
router.get("/all_department", getDepartment);

router.get("/all_director", getDirector);

router.get("/all_division", getDivision);

router.get("/all_employee", getEmployee);

router.get("/news", getNews);

module.exports = router;
