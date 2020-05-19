const path = require("path");
//const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Asset = require("../models/Asset");

// @description     Get all assets
// @route           GET /api/v1/assets
// @access          Public
exports.getAssets = asyncHandler(async (req, res, next) => {
  const assets = await Asset.find();
  res.status(200).json({
    success: true,
    count: assets.length,
    navIcons: assets.filter((asset) => asset.assetType === "navIcon"),
    socialMediaIcons: assets.filter(
      (asset) => asset.assetType === "socialMediaIcon"
    ),
  });
});
