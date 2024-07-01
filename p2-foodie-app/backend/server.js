require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");


//accessing routes
const authRoutes = require("./routes/authRoutes.js");

//express app
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", authRoutes);

//connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listening on port once connection build
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch((err) => console.log(err));