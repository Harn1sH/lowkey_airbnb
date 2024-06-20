const jwt = require("jsonwebtoken");
exports.index = async (req, res) => {
  if (req.cookies) {
    const { token } = req.cookies;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, {}, async (err, token) => {
        if (err) throw err;
        res.json(token);
      });
    }
  } else {
    res.json(null);
  }
};
