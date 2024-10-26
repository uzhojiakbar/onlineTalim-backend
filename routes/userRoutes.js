const express = require("express");
const User = require("../models/User");
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/all", verifyToken, isAdmin, async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Parollarni ko'rsatmaslik
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error. Could not get users." });
  }
});

module.exports = router;
