const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

//defining schema
const workoutSchema = new Schema({
    title : {
        type: String,
        required: true,
    },

    reps:{
        type: Number,
        required: true
    },

    weight:{
        type: Number,
        required: true
    },

    user_id: {
        type : String,
        required: true
    }
}, { timestamps: true })

//model name = Workout (always make this singular beacsue anyhow it gonna convert it into Workouts)
module.exports = mongoose.model('Workout', workoutSchema);