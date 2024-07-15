const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  place: { type: mongoose.Schema.Types.ObjectId, ref: "Place" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  checkIn: String,
  checkOut: String,
  name: String,
  phone: String,
  price: Number,
  days: Number,
  guest: Number,
});

const bookingModel = mongoose.model("Booking", bookingSchema);
module.exports = bookingModel;
