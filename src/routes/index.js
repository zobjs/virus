const Router = require("express").Router;

const router = new Router();
const authRouter = require("../modules/auth/auth.routes");
const userRouter = require("../modules/user/user.routes");

router.use("/auth", authRouter);
router.use("/user", userRouter);

module.exports = router;
