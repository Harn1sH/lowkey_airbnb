const express = require("express");
const router = express.Router();
const placeController = require("../controllers/placeController");

router.post("/", placeController.index);
router.put("/", placeController.editPlace);

router.get("/getPlace", placeController.returnPlaces);
router.get("/getAllPlace", placeController.returnAllPlace);
router.get("/:id", placeController.returnPlace);
module.exports = router;
