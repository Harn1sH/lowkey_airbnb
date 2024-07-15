const register = require("./registerController");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.index = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const dbUser = await User.findOne({ email });

  if (dbUser) {
    const isValid = bcrypt.compareSync(password, dbUser.password);
    if (isValid) {
      jwt.sign(
        { name: dbUser.name, email: email, id: dbUser._id },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res
            .cookie("token", token, {
              sameSite: "none",
              secure: true,
            })
            .json({ name: dbUser.name, email: email, id: dbUser._id });
        },
      );
    } else {
      res.status(422).json({ error: "Incorrect Password" });
    }
  } else {
    res.status(422).json({ error: "Invalid credentials" });
  }
};
