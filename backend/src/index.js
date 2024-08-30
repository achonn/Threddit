const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const signUpRouter = require('./routes/signUp');
const loginRouter = require('./routes/login');
const postRouter = require("./routes/post")
const statusRouter = require("./routes/status")

const PORT = process.env.PORT || '3000';
const MONGODB_URL = process.env.MONGODB_URL;

// GLOBAL MIDDLEWARE
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(cookieParser());

// ROUTES
app.use('/sign-up', signUpRouter);
app.use('/login', loginRouter);
app.use("/post", postRouter)
app.use("/auth-status", statusRouter)

// START SERVER
app.listen(PORT, async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log(`Server connected on port ${PORT}`);
  } catch (err) {
    console.log(err.message);
  }
});
