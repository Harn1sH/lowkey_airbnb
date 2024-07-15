const mongoose = require("mongoose");
const placeSchema = mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  address: { type: String },
  photos: [String],
  description: String,
  perks: [String],
  extraInfo: String,
  checkIn: String,
  checkOut: String,
  maxGuest: Number,
  price: Number,
});

const placeModel = mongoose.model("Place", placeSchema);
module.exports = placeModel;
