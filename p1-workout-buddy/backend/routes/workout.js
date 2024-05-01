const express = require('express');

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
router.post('/', (req,res) => {
    res.json({msg : 'POST workouts'})
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