const express = require('express');
const router = express.Router();

const {
    signup_get,
    signup_post,
    login_get,
    login_post

} = require ('../controllers/authController')

//to add new user
router.post('/signup', signup_post)

//to login new user
router.post('/login', login_post)

module.exports = router;