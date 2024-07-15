const User = require("../models/user");
const bcrypt = require("bcryptjs");
const bcryptSalt = bcrypt.genSaltSync();
exports.salt = bcryptSalt;

exports.index = async (req, res) => {
  const { name, email, password } = req.body;
  const isThere = await User.findOne({ email: email });
  if (!isThere) {
    const createdUser = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(createdUser);
  } else {
    res.status(400).send("Already exists");
  }
};
