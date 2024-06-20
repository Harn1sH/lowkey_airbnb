const express = require("express");
const app = express();
const cors = require("cors");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/loginRouter");
const profileRouter = require("./routes/profileRouter");
const User = require("./models/user");
require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

app.use(cors({ credentials: true }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("ok");
});

app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/profile", profileRouter);

app.listen(5001, () => {
  console.log("listening on port 5001,");
});
