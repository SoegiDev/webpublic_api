const { authJwt } = require("../middleware");
const controller = require("../controller/user.controller");
const router = require("express").Router();

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.get(
    "/board",
    [authJwt.verifyToken, authJwt.isDirector],
    controller.directorBoard
  );

module.exports = router;