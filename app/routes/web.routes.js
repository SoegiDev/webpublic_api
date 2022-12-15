const { authJwt } = require("../middleware");
const {postAddNews} = require("../controller/web.controller");
const upload = require("../middleware/common_multer");
const router = require("express").Router();
router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});
router.post("/add_news", [authJwt.verifyToken],upload.single("image"), postAddNews);
module.exports = router;
