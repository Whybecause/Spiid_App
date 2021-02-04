const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  name: { type: String, required: true, unique: false},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdDate: { type: Date, default: Date.now},
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role"
    }
  ],
  rentals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rental",
      default: null
    }
  ],
  vehicules: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicule",
      default: null
    }
  ]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);