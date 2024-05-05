const express = require('express');
const router = express.Router();

const {
    signup_get,
    signup_post,
    login_get,
    login_post

} = require ('../controllers/authController')

//to get signup users
router.get('/signup', signup_get)

//to add new user
router.post('/signup', signup_post)


//to login user
router.get('/login', login_get)


//to login new user
router.get('/login', login_post)

module.exports = router;