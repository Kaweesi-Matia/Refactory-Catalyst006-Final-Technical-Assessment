const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  Surname: { type: String,required: true},
  Givenname: { type: String,required: true},
  gender: { type: String,required: true},
  placeofresidence: {type: String, required:true},
  occupation: {type: String, required: true},
  Dateofbirth: {type: String, required: true },
  Nationality: {type: String,required: true},
  category: {type: String,required: true},
  
  
});

module.exports = mongoose.model("registrat", registrationSchema);
