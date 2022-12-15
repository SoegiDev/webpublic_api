const { verifySignUp } = require("../middleware");
const {signIn,signUp} = require("../controller/auth.controller");
const router = require("express").Router();

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});
router.post(
  "/sign_up",
  [
  verifySignUp.checkDuplicateUsernameOrEmail,
  verifySignUp.checkRolesExisted
  ],
  signUp
);
router.post("/sign_in", signIn);
module.exports = router;