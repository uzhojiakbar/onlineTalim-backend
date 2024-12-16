const express = require("express");
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
const { getAllUsers } = require("../controllers/userController");

const router = express.Router();

router.get("/all", verifyToken, isAdmin, getAllUsers);

module.exports = router;
