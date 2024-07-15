const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/uploadController");

router.post("/", uploadController.uploadByLink);
router.post("/device", uploadController.uploadFromDevice);

module.exports = router;
