const express = require("express");
const router = express.Router();
const topicController = require("../controllers/topicController");

// Yangi mavzu qo'shish
router.post("/:fannomi/topics", topicController.addTopic);

// Mavzuni yangilash
router.put("/:fannomi/topics/:id", topicController.updateTopic);

// Mavzuni o'chirish
router.delete("/:fannomi/topics/:id", topicController.deleteTopic);

module.exports = router;
