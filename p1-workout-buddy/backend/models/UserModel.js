const mongoose = require('mongoose');

const { isEmail } = require('validator')


const Schema = mongoose.Schema;

const userSchema = new Schema ({

    email : {
        type: String,
        reuired: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email address']
    },

    password : {
        type: String,
        reuired: [true, 'Please enter a Password'],
        minlength: [6, 'Minimum password length is 6 charactres']
    }
}, { timestamps: true })


//fire funtion after event ocuur
userSchema.post('save', function(doc, next){
    console.log('new user is created and saved')
    next();
})

//fire funtion before event ocuur
userSchema.post('save', function(next){
    console.log('new user is about to be created', this)
    next();
})


const User = mongoose.model('User', userSchema)

module.exports = User;
