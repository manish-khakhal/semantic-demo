const {Schema} = require('mongoose');
const productSchema = require('./Product');

const orderSchema = new Schema({
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: productSchema
        }
    ]
});

module.exports = orderSchema;