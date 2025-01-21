const express = require("express");
const router = express.Router();
const testController = require("../controllers/testController");

const {
  isTeacherOrAdmin,
  verifyToken,
} = require("../middleware/authMiddleware");

// Testlarni olish
router.get("/:fannomi/:darsnomi", testController.getTests);

// Testni olish (id bo'yicha)
router.get("/:fannomi/:darsnomi/:testId", testController.getTest);

// Yangi test qo'shish
router.post(
  "/:fannomi/:darsnomi",
  verifyToken,
  isTeacherOrAdmin,
  testController.addTest
);

// Testni yangilash
router.put(
  "/:fannomi/:darsnomi/:testId",
  verifyToken,
  isTeacherOrAdmin,
  testController.updateTest
);

// Testni o'chirish
router.delete(
  "/:fannomi/:darsnomi/:testId",
  verifyToken,
  isTeacherOrAdmin,
  testController.deleteTest
);

module.exports = router;
