const {Schema} = require('mongoose');
const productSchema = require('./Product');

const garageSchema = new Schema({
    /*gargId: {
        type: String,
        required: true,
    },*/

    name: {
        type: String,
        required: true,
    },
    productList: [productSchema],
});

module.exports = garageSchema;