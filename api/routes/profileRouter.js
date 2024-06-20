const express = require("express");
const profileRouter = require("../controllers/profileController");
const router = express.Router();

router.get("/", profileRouter.index);

module.exports = router;
