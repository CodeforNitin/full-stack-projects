require('dotenv').config()

const express = require ('express');
const workoutRoutes = require('./routes/workout')

//express app
const app = express();

//routes
app.use('/api/workoutes',workoutRoutes)

//listening on port
app.listen(process.env.PORT, ()=>{
    console.log("listening on port 4000");
})

