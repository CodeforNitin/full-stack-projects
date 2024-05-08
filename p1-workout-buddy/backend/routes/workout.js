const express = require('express');
const {  
    createWorkout, 
    getWorkout, 
    getSingleWorkout, 
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

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