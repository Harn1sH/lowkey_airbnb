const express = require("express");
const profileRouter = require("../controllers/profileController");
const router = express.Router();

router.get("/", profileRouter.index);
router.get("/logout", profileRouter.logout);

module.exports = router;
