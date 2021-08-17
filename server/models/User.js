const {Schema} = require('mongoose');
const orderSchema = require('./Order');

const userSchema = new Schema({
    /*userId: {
        type: String,
        required: true,
    },*/
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password:{ 
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must input a valid email address'],
    },
    phoneNum: {
        type: String,
        required: true,
    },
    orders: [orderSchema],

});

module.exports = userSchema;