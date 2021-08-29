const {Schema, model} = require('mongoose');

const garageSchema = new Schema({
    /*gargId: {
        type: String,
        required: true,
    },*/

    name: {
        type: String,
        required: true,
    },
    productList: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product"
            }
    ],
});
const garage = model("Garage", garageSchema);
module.exports = garage;