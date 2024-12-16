const express = require("express");
const {
  verifyToken,
  isAdmin,
  isTeacherOrAdmin,
} = require("../middleware/authMiddleware");
const {
  getAllUsers,
  GetUser,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", verifyToken, isAdmin, getAllUsers);
router.get("/:username", verifyToken, isTeacherOrAdmin, GetUser);

// Mavzuni yangilash
router.put("/:username", verifyToken, isAdmin, updateUser);

module.exports = router;
