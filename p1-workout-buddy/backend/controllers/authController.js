const mongoose = require('mongoose');
const User = require('../models/UserModel')


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
        console.log(err)
        res.status(400).json('error: user not created')
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