const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const vehiculeSchema = mongoose.Schema({
    qrcode: { type: String, unique: true, default: null},
    available: { type: Boolean, default: true},
    lat: { type: String, required: true},
    long: { type: String, required: true},
    vehiculeNumber: {type: Number}
  });
  
  vehiculeSchema.plugin(uniqueValidator);
  
  module.exports = mongoose.model('Vehicule', vehiculeSchema);