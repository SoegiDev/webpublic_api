const { authJwt } = require("../middleware");
const controller = require("../controller/upload.controller");
const upload = require("../middleware/common_multer");
const router = require("express").Router();
router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});
router.post("/upload_image_aws", [authJwt.verifyToken],upload.single("image"),controller.uploadImageAws);
module.exports = router;
