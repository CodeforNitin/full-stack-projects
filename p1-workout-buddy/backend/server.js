require('dotenv').config()

const express = require ('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workout')
const authRoutes = require('./routes/authRoutes')
const cookieParser = require('cookie-parser')

//express app
const app = express();

/* middleware*/
app.use(express.json())
app.use(cookieParser())

//routes
app.use('/api/workouts',workoutRoutes)

//authentication routes
app.use(authRoutes)

//connect to database
mongoose.connect(process.env.MONGO_URI)
.then(()=>{

    //listening on port once connection build
    app.listen(process.env.PORT, ()=>{
    console.log('listening on port', process.env.PORT);
})
})
.catch((err) => console.log(err))


