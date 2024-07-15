const express = require("express");
const app = express();
const cors = require("cors");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/loginRouter");
const profileRouter = require("./routes/profileRouter");
const uploadRouter = require("./routes/uploadRouter");
const bookingRouter = require("./routes/bookingRouter");
require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const photosMiddleware = multer({ dest: "uploads/" });
const placeRouter = require("./routes/placeRouter");

app.use(
  cors({ credentials: true, origin: "https://lowkey-airbnb.onrender.com" }),
);
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("ok");
});
app.use(express.urlencoded({ extended: false }));
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/uploads/device", photosMiddleware.array("photos", 100));
app.use("/uploads", uploadRouter);
app.use("/profile", profileRouter);
app.use("/place", placeRouter);
app.use("/booking", bookingRouter);

app.listen(process.env.PORT || 5001, () => {
  console.log("listening on port 5001,");
});
