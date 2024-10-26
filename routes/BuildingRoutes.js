const express = require("express");
const Building = require("../models/Buildings");
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add", verifyToken, isAdmin, async (req, res) => {
  try {
    const { name, address, floors } = req.body;

    const newBuilding = new Building({ name, address, floors });
    await newBuilding.save();

    res
      .status(201)
      .json({ message: "Building added successfully!", building: newBuilding });
  } catch (error) {
    res.status(500).json({ message: "Server error. Could not add building." });
  }
});

module.exports = router;
