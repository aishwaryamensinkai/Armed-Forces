const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
 
var candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Full name can't be empty",
  },
  gender: {
    type: String,
    required: "Gender can't be empty",
  },
  height: {
    type: Number,
    required: "Email can't be empty",
  },
  age: {
    type: Number,
    required: "Age can't be empty ",
  },
  weight: {
    type: Number,
    required: "Weight can't be empty",
  },
  category: {
    type: String,
    required: "Category can't be empty",
  },
  typeOfForce: {
    type: String,
    required: "Type Of Force can't be empty",
  },
  qualification: {
    type: String,
    required: "Qualification can't be empty",
  },
  saltSecret: String,
});

// // Custom validation for email
// studentSchema.path("gender", "height").validate((val,val) => {
//   if(gender =="female" && height> 150)
//   return (gender.test(val) && height.test(val));
// }, "Invalid e-mail.");

// studentSchema.path("contactno").validate((val) => {
//   contactnoRegex = /^\d{3}\d{3}\d{4}$/;
//   return contactnoRegex.test(val);
// }, "Invalid Contact Number.");

// Events
candidateSchema.pre("save", function (next) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      this.password = hash;
      this.saltSecret = salt;
      next();
    });
  });
});

mongoose.model("Candidate", candidateSchema);
