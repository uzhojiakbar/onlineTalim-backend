const express = require("express");
const router = express.Router();
const topicController = require("../controllers/topicController");

const {
  isTeacherOrAdmin,
  verifyToken,
} = require("../middleware/authMiddleware");

// Yangi mavzu qo'shish
router.get("/:fannomi", topicController.getTopics);

router.post("/:fannomi", topicController.addTopic);

// Mavzuni yangilash
router.put("/:fannomi/:id", topicController.updateTopic);

// Mavzuni o'chirish
router.delete("/:fannomi/:id", topicController.deleteTopic);

module.exports = router;
