const {Schema, Model, model} = require('mongoose');
const bcrypt = require('bcrypt');

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
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ],

});
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };

  
const user = model("User", userSchema);
module.exports = user;