const express = require("express");
const router = express.Router();
const lessonController = require("../controllers/lessonController");
const {
  isTeacherOrAdmin,
  verifyToken,
} = require("../middleware/authMiddleware");

// /lessons yo'li
router.get("/", lessonController.getAllLessons);

// /lesson/:fannomi yo'li
router.get("/lesson/:fannomi", lessonController.getLessonByName);

// Yangi dars qo'shish yo'li
router.post("/", verifyToken, isTeacherOrAdmin, lessonController.addLesson);

// Darsni yangilash
router.put(
  "/lesson/:fannomi",
  verifyToken,
  isTeacherOrAdmin,
  lessonController.updateLesson
);

// Darsni o'chirish
router.delete(
  "/lesson/:fannomi",
  verifyToken,
  isTeacherOrAdmin,
  lessonController.deleteLesson
);

module.exports = router;
