const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const _ = require("lodash");

const ctrlCandidate = require("../controllers/candidate.controller");

router.post("/sregister", ctrlCandidate.sregister);
router.get("/candidateProfile", ctrlCandidate.candidateProfile);

module.exports = router;
