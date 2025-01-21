const Lesson = require("../models/Lessons");

// Barcha darslarni olish
const getAllLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find().select("-topics -test -views");
    res.json(lessons);
  } catch (error) {
    console.error("Error in getAllLessons:", error);
    res.status(500).json({ message: "Server xatosi yuz berdi" });
  }
};

// Fanni nomi bo'yicha olish

const getLessonByName = async (req, res) => {
  const fannomi = req.params.fannomi;
  try {
    // 'topics' maydonini chiqarib tashlash uchun select metodida '-' belgisi qo'llaniladi
    const lesson = await Lesson.findOne({ nomi: fannomi }).select("-topics");
    if (lesson) {
      res.json(lesson);
    } else {
      res.status(404).json({ message: "Fan topilmadi" });
    }
  } catch (error) {
    console.error("Error in getLessonByName:", error);
    res.status(500).json({ message: "Server xatosi yuz berdi" });
  }
};

// Yangi dars qo'shish
const addLesson = async (req, res) => {
  const { nomi, desc } = req.body;

  try {
    const teacher = `${req.user.firstname} ${req.user.lastname} `;
    console.log(req.user);
    const newLesson = new Lesson({ nomi, desc, teacher });
    await newLesson.save();

    res.status(201).json(newLesson);
  } catch (error) {
    console.error("Error in addLesson:", error);

    if (error.code === 11000) {
      res.status(409).json({
        message: "Dublikat qiymat: dars ID yoki nomi allaqachon mavjud",
      });
    } else if (error.name === "ValidationError") {
      res
        .status(400)
        .json({ message: "Ma'lumotlar to'g'ri emas", errors: error.errors });
    } else {
      res
        .status(500)
        .json({ message: "Dars qo'shishda server xatosi yuz berdi" });
    }
  }
};

// Darsni yangilash
const updateLesson = async (req, res) => {
  const fannomi = req.params.fannomi;
  const updates = req.body;

  try {
    const updatedLesson = await Lesson.findOneAndUpdate(
      { nomi: fannomi },
      updates,
      { new: true, runValidators: true }
    );
    if (updatedLesson) {
      res.json(updatedLesson);
    } else {
      res.status(404).json({ message: "Fan topilmadi" });
    }
  } catch (error) {
    console.error("Error in updateLesson:", error);

    if (error.code === 11000) {
      res.status(409).json({
        message:
          "Dublikat qiymat: dars nomi yoki boshqa qiymat allaqachon mavjud",
      });
    } else if (error.name === "ValidationError") {
      res
        .status(400)
        .json({ message: "Ma'lumotlar to'g'ri emas", errors: error.errors });
    } else {
      res
        .status(500)
        .json({ message: "Dars yangilashda server xatosi yuz berdi" });
    }
  }
};

// Darsni o'chirish
const deleteLesson = async (req, res) => {
  const fannomi = req.params.fannomi;

  try {
    const deletedLesson = await Lesson.findOneAndDelete({ nomi: fannomi });
    if (deletedLesson) {
      res.json({ message: "Dars muvaffaqiyatli o'chirildi" });
    } else {
      res.status(404).json({ message: "Fan topilmadi" });
    }
  } catch (error) {
    console.error("Error in deleteLesson:", error);
    res
      .status(500)
      .json({ message: "Dars o'chirishda server xatosi yuz berdi" });
  }
};

module.exports = {
  getAllLessons,
  getLessonByName,
  addLesson,
  updateLesson,
  deleteLesson,
};
