require('dotenv').config()

const express = require ('express');
const workoutRoutes = require('./routes/workout')

//express app
const app = express();

/* middleware*/
app.use(express.json())

//routes
app.use('/api/workouts',workoutRoutes)

//listening on port
app.listen(process.env.PORT, ()=>{
    console.log("listening on port 4000");
})

