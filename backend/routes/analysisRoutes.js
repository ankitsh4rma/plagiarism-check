const express = require("express");
const router = express.Router();
const authController = require("../controllers/analysisController");
router.post("/analyze",authController);

module.exports=router;