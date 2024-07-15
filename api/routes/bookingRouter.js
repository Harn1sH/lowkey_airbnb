const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookinController");

router.post("/", bookingController.index);
router.get("/getBookings", bookingController.getBookings);
router.get("/:id", bookingController.getBooking);

module.exports = router;
