const Workout = require('../models/WorkoutModel')
const mongoose = require('mongoose');

//get all workouts

const getWorkout = async (req, res) => {
    const workouts = await Workout.find().sort({ createdAt : -1 })
    res.status(200).json(workouts);
}

//get single workpout
const getSingleWorkout = async (req, res) => {
    //always give id in curly braces OR ELSE write const id = req.params.id
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error : "No such workout"})
    }

    const result =  await Workout.findById(id)

    if (result){
        res.status(200).json(result);
    }
    else{
        res.json(400).json({error: "No such workout"})
    }
}

//create new workout

const createWorkout = async (req,res) => {

    const { title, reps, weight } = req.body;

    let emptyFields = [];

    if(!title){
        emptyFields.push('title')
    }

    if(!weight){
        emptyFields.push('weight')
    }
    
    if(!reps){
        emptyFields.push('reps')
    }

    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }
    
    try {
        const newWorkout = await Workout.create({title, reps, weight})
        res.status(200).json(newWorkout); 
    } 
    catch (error) {
        res.status(400).json({error: error.message})
    }
} 

//delete a workout 

const deleteWorkout = async (req, res) => {

     //always give id in curly braces OR ELSE write const id = req.params.id
     const {id} = req.params;

     if (!mongoose.Types.ObjectId.isValid(id)) {
         return res.status(404).json({error : "No such workout"})
     }
     
     //this take two parameter 1. _id = mongoose id 2. id that you are searching
     const result = await Workout.findOneAndDelete({_id : id})
 
     if (result){
         res.status(200).json(result);
     }
     else{
         res.json(400).json({error: "No such workout"})
    }

}

// update a workout

const updateWorkout = async (req, res) => {

    //always give id in curly braces OR ELSE write const id = req.params.id
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error : "No such workout"})
    }

    //i takes two parameters 1. _id = mongoose id, 2. updated parameter
    const result = await Workout.findOneAndUpdate({_id : id}, {
        ...req.body
    })

    if (result){
        res.status(200).json(result);
    }
    else{
        res.json(400).json({error: "No such workout"})
   }

}

module.exports = {
    createWorkout,
    getWorkout,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
}