const {Schema} = require('mongoose');

const productSchema = new Schema({
    /*prodId: {
        type: String,
        required: true,
    },*/
    image:{ 
        type: String,
    },
    price:{
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    }
});

module.exports = productSchema;