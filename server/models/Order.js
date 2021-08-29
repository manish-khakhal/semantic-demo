const {Schema, model} = require('mongoose');
const productSchema = require('./Product');

const orderSchema = new Schema({
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: productSchema
        }
    ]
});
const order = model("Order", orderSchema);
module.exports = order;