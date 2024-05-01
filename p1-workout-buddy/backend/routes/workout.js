const express = require('express');
const Workout = require('../models/WorkoutModel');

const router = express.Router();

//GET all workouts
router.get('/', (req,res) => {
    res.json({msg : 'GET all workouts'})
})

//GET single workouts
router.get('/:id', (req,res) => {
    res.json({msg : 'GET single workouts'})
})

//POST single workouts
router.post('/', async (req,res) => {

    const { title, reps, weight } = req.body;
    
    try 
    {
        const newWorkout = await Workout.create({title, reps, weight})
        res.status(200).json(newWorkout); 
    } 
    catch (error) 
    {
        res.status(400).json({error: error.message})
    }
})


//DELETE single workouts
router.delete('/:id', (req,res) => {
    res.json({msg : 'DELETE workouts'})
})


//UPDATE single workouts
router.patch('/:id', (req,res) => {
    res.json({msg : 'UPDATE workouts'})
})


module.exports = router;