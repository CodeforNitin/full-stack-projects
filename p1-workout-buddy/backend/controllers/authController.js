const mongoose = require('mongoose');
const User = require('../models/UserModel')

//handleErrors

// handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };
  
    // duplicate email error
    if (err.code === 11000) {
      errors.email = 'that email is already registered';
      return errors;
    }
  
    // validation errors
    if (err.message.includes('User validation failed')) {
      // console.log(err);
      Object.values(err.errors).forEach(({ properties }) => {
        // console.log(val);
        // console.log(properties);
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
}


const signup_get = async (req, res) => {
    res.send('signup')
}

const signup_post = async (req, res) => {

    const {email, password} = req.body;
    try{
        const newUser = await User.create({email, password})
        res.status(201).json(newUser)
    }
    catch (err){
        const errors = handleErrors(err);
        res.status(400).json({ errors })
    }
}

const login_get = async (req, res) => {
    res.send('login')
}

const login_post = async (req, res) => {
    res.send(' new login')
}








module.exports = {
    signup_get,
    signup_post,
    login_get,
    login_post
}