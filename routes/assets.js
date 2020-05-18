const express = require("express");
const { getAssets } = require("../controllers/assets");

const Asset = require("../models/Asset");
const advancedResults = require("../middleware/advancedResults");

const router = express.Router();

router.route("/").get(getAssets);

module.exports = router;
