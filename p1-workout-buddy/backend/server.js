require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require('cors')

//accessing routes
const workout = require("./routes/workout");
const authRoutes = require("./routes/authRoutes");

//express app
const app = express();

app.use(express.json());
app.use(cookieParser());

  // CORS middleware -- this didnt work after protected routes
  // app.all("*", (req, res, next) => {
  //   res.header("Access-Control-Allow-Origin", `*`);
  //   res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  //   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  //   next();
  // });

app.use(cors(
  {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "credentials": true,
    "optionsSuccessStatus": 204
  }
))

//routes
app.use("/api/workouts", workout);
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