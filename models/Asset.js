const mongoose = require("mongoose");

const AssetSchema = new mongoose.Schema({
  assetType: {
    type: String,
    required: [
      true,
      "Please add an assetType of either navIcon or socialMediaIcon",
    ],
  },
  assetName: String,
  displayName: String,
  href: String,
  src: String,
  alt: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Asset", AssetSchema);
