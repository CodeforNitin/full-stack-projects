const express = require('express');
const {  
    createWorkout, 
    getWorkout, 
    getSingleWorkout, 
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router();

//GET all workouts
router.get('/', getWorkout)

//GET single workouts
router.get('/:id', getSingleWorkout)

//POST single workouts
router.post('/', createWorkout)


//DELETE single workouts
router.delete('/:id', deleteWorkout)


//UPDATE single workouts
router.patch('/:id', updateWorkout)


module.exports = router;