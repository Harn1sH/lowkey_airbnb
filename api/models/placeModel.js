const mongoose = require("mongoose");
const placeSchema = mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  address: { type: String, required: true },
  photos: [String],
  description: String,
  perks: [String],
  extraInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxGuess: Number,
});

const placeModel = mongoose.model("Place", placeSchema);
module.exports = placeModel;
