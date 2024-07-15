const jwt = require("jsonwebtoken");
require("dotenv").config();
const booking = require("../models/bookingModel");
const place = require("../models/placeModel");

/*
* place: { type: mongoose.Schema.Types.ObjectId, ref: "Place" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  checkIn: String,
  checkOut: String,
  name: String,
  phone: String,
  price: Number,
  days: Number,
*
* */
exports.index = (req, res) => {
  const { token } = req.cookies;
  const { id, checkIn, checkOut, name, number, price, maxGuest, days } =
    req.body;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, token) => {
      if (err) throw err;
      const bookDoc = await booking.create({
        place: id,
        user: token.id,
        checkIn,
        checkOut,
        name,
        phone: number,
        price,
        days,
        guest: maxGuest,
      });
      res.json(bookDoc);
    });
  }
};

exports.getBookings = (req, res) => {
  const { token } = req.cookies;
  let result = [];
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, token) => {
      if (err) throw err;
      const bookDoc = await booking.find({ user: token.id });
      for (let i = 0; i < bookDoc.length; i++) {
        const placeDoc = await place.findById(bookDoc[i].place);
        result = [...result, placeDoc];
      }
      res.json(result);
      // res.json(bookDoc);
    });
  }
};

exports.getBooking = (req, res) => {
  const { id } = req.params;
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, token) => {
      if (err) throw err;
      const { id: user } = token;
      const bookDoc = await booking.find({ user, place: id });
      res.json(bookDoc);
    });
  }
};
