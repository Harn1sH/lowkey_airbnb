const place = require("../models/placeModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.index = async (req, res) => {
  const { token } = req.cookies;
  const {
    title,
    address,
    photoName,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxMembers,
    price,
  } = req.body;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, token) => {
      if (err) {
        throw err;
      } else {
        console.log(token);
        const placeDoc = await place.create({
          owner: token.id,
          title: title,
          address: address,
          photos: photoName,
          description,
          perks,
          extraInfo,
          checkIn,
          checkOut,
          maxGuest: maxMembers,
          price,
        });
        res.json(placeDoc);
      }
    });
  }
};

exports.returnPlaces = async (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, token) => {
      if (err) {
        throw err;
      }
      res.json(await place.find({ owner: token.id }));
    });
  }
};

exports.editPlace = (req, res) => {
  const { token } = req.cookies;
  const {
    id,
    title,
    address,
    photoName,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxMembers,
    price,
  } = req.body;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, token) => {
      try {
        const placeDoc = await place.findById(id);
        if (token.id === placeDoc.owner.toString()) {
          if (placeDoc) {
            placeDoc.set({
              title: title,
              address: address,
              photos: photoName,
              description,
              perks,
              extraInfo,
              checkIn,
              checkOut,
              maxGuest: maxMembers,
              price,
            });
            await placeDoc.save();
            console.log("done");
            res.json(placeDoc);
          }
        }
      } catch (err) {
        res.status(400).json(err);
      }
    });
  }
};

exports.returnPlace = async (req, res) => {
  const { id } = req.params;
  if (id) {
    console.log(id);
    const placeDoc = await place.findById(id);
    res.json(placeDoc);
  }
};

exports.returnAllPlace = async (req, res) => {
  res.json(await place.find());
};
