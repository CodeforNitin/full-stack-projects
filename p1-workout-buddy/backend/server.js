require('dotenv').config()

const express = require ('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const cors = require('cors')

//accessing routes
const workout = require('./routes/workout')
const authRoutes = require('./routes/authRoutes')

//express app
const app = express();

app.use(express.json())
app.use(cookieParser())

// CORS middleware
const allowCrossDomain = (req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, `*`);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next();
  };

  app.use(allowCrossDomain);
  

//routes
app.use('/api/workouts',workout)
app.use('/api',authRoutes)

//connect to database
mongoose.connect(process.env.MONGO_URI)
.then(()=>{

    //listening on port once connection build
    app.listen(process.env.PORT, ()=>{
    console.log('listening on port', process.env.PORT);
})
})
.catch((err) => console.log(err))


