const express = require("express");
const router = express.Router();
const topicController = require("../controllers/topicController");

const {
  isTeacherOrAdmin,
  verifyToken,
} = require("../middleware/authMiddleware");

// Yangi mavzu qo'shish
router.get("/", (req, res) => {
  res.status(404).json({ message: "Fan nomini kiriting!" });
});

router.get("/:fannomi", topicController.getTopics);

router.get("/:fannomi/:topicname", topicController.getTopic);

router.post(
  "/:fannomi",
  verifyToken,
  isTeacherOrAdmin,
  topicController.addTopic
);

// Mavzuni yangilash
router.put(
  "/:fannomi/:topicName",
  verifyToken,
  isTeacherOrAdmin,
  topicController.updateTopic
);

// Mavzuni o'chirish
router.delete(
  "/:fannomi/:topicName",
  verifyToken,
  isTeacherOrAdmin,
  topicController.deleteTopic
);

module.exports = router;
