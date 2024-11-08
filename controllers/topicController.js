const Lesson = require("../models/Lessons");

// Yangi mavzu qo'shish
const addTopic = async (req, res) => {
  const fannomi = req.params.fannomi;
  const newTopic = req.body;

  try {
    const lesson = await Lesson.findOne({ nomi: fannomi });
    if (lesson) {
      lesson.topics.push(newTopic);
      await lesson.save();
      res.status(201).json(lesson);
    } else {
      res.status(404).json({ message: "Fan topilmadi" });
    }
  } catch (error) {
    res.status(500).json({ message: "Mavzu qo'shishda xatolik" });
  }
};

// Mavzuni yangilash
const updateTopic = async (req, res) => {
  const fannomi = req.params.fannomi;
  const topicId = parseInt(req.params.id, 10);
  const updates = req.body;

  try {
    const lesson = await Lesson.findOne({ nomi: fannomi });
    if (lesson) {
      const topic = lesson.topics.find((topic) => topic.id === topicId);
      if (topic) {
        Object.assign(topic, updates);
        await lesson.save();
        res.json(topic);
      } else {
        res.status(404).json({ message: "Mavzu topilmadi" });
      }
    } else {
      res.status(404).json({ message: "Fan topilmadi" });
    }
  } catch (error) {
    res.status(500).json({ message: "Mavzuni yangilashda xatolik" });
  }
};

// Mavzuni o'chirish
const deleteTopic = async (req, res) => {
  const fannomi = req.params.fannomi;
  const topicId = parseInt(req.params.id, 10);

  try {
    const lesson = await Lesson.findOne({ nomi: fannomi });
    if (lesson) {
      lesson.topics = lesson.topics.filter((topic) => topic.id !== topicId);
      await lesson.save();
      res.json({ message: "Mavzu muvaffaqiyatli o'chirildi" });
    } else {
      res.status(404).json({ message: "Fan topilmadi" });
    }
  } catch (error) {
    res.status(500).json({ message: "Mavzuni o'chirishda xatolik" });
  }
};

module.exports = {
  addTopic,
  updateTopic,
  deleteTopic,
};
