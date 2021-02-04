const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const rentalSchema = mongoose.Schema({
    createdDate: { type: Date, default: Date.now},
    vehicule: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicule"
        }
    ],
    user: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    isFinished: { type: Boolean, default: false},
  });
  
  rentalSchema.plugin(uniqueValidator);
  
  module.exports = mongoose.model('Rental', rentalSchema);