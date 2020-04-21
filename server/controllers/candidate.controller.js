const mongoose = require("mongoose");
const passport = require("passport");
const _ = require("lodash");

const Candidate = mongoose.model("Candidate");

module.exports.sregister = (req, res, next) => {
  var candidate = new Candidate();
  candidate.name = req.body.name;
  candidate.age = req.body.age;
  candidate.qualification = req.body.qualification;
  candidate.height = req.body.height;
  candidate.weight = req.body.weight;
  candidate.gender = req.body.gender;
  candidate.category = req.body.category;
  candidate.typeOfForce = req.body.typeOfForce;

  if (candidate.gender == "Female" && candidate.height < 150)
    console.log(" Height is less then 150" + JSON.stringify(err, undefined, 2));
  else if (candidate.gender == "Male" && candidate.height < 152)
    console.log(
      "Height is less then 152 :" + JSON.stringify(err, undefined, 2)
    );
  else if (candidate.age > 26)
    console.log("Age is more then 25 :" + JSON.stringify(err, undefined, 2));
  else {
    candidate
      .save()
      .then((result) => {
        res.status(201).json({ message: "Candidate created", result: result });
      })
      .catch((err) => {
        res.status(500).json({ message: "Candidate Not created", Error: err });
      });
  }
};

// module.exports.candidateProfile = (req, res, next) => {
//   Candidate.find({
//     $and: [
//       {
//         $or: [
//           { gender: "male", height: { $gt: 152 } },
//           { gender: "female", height: { $gt: 150 } },
//         ],
//       },
//       { age: { $lt: 26 } },
//     ],
//   }).then((candidate) => {
//     res.status(200).json({
//       message: "Users fetched successfully!",
//       candidate : candidate,
//     });
//   });
// };

module.exports.candidateProfile = (req, res, next) => {
  Candidate.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in Retriving Candidate :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
};
