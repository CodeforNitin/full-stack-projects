require('dotenv').config()

const express = require ('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workout')

//express app
const app = express();

/* middleware*/
app.use(express.json())

//routes
app.use('/api/workouts',workoutRoutes)

//connect to database
mongoose.connect(process.env.MONGO_URI)
.then(()=>{

    //listening on port once connection build
    app.listen(process.env.PORT, ()=>{
    console.log('listening on port', process.env.PORT);
})
})
.catch((err) => console.log(err))


