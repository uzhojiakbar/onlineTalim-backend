const Lesson = require("../models/Lessons");

const getTopics = async (req, res) => {
  const fannomi = req.params.fannomi;

  try {
    const lesson = await Lesson.findOne({ nomi: fannomi });

    if (lesson) {
      const resData = lesson.topics.map((topic) => {
        return {
          id: topic["_id"],
          nomi: topic.name,
          fan: fannomi || "Nomalum",
        };
      });
      res.json(resData);
    } else {
      res.status(404).json({ message: "Fan topilmadi" });
    }
  } catch (error) {
    console.error("Error in getTopics:", error);
    res.status(500).json({ message: "Mavzularni olishda xatolik" });
  }
};

// Mavzuni olish (nomi bo'yicha)
const getTopic = async (req, res) => {
  const fannomi = req.params.fannomi;
  const topicname = req.params.topicname;

  console.log(fannomi);
  console.log(topicname);

  try {
    const lesson = await Lesson.findOne({ nomi: fannomi });
    if (lesson) {
      const topic = lesson.topics.find((topic) => topic.name === topicname);
      if (topic) {
        res.json(topic);
      } else {
        res.status(404).json({ message: "Mavzu topilmadi" });
      }
    } else {
      res.status(404).json({ message: "Fan topilmadi" });
    }
  } catch (error) {
    console.error("Error in getTopic:", error);
    res.status(500).json({ message: "Mavzuni olishda xatolik" });
  }
};

// Yangi mavzu qo'shish
const addTopic = async (req, res) => {
  const fannomi = req.params.fannomi;
  const newTopic = req.body;
  console.log(newTopic);

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
    console.error("Error in addTopic:", error);

    res.status(500).json({ message: "Mavzu qo'shishda xatolik" });
  }
};

// Mavzuni yangilash (nomi bo'yicha)
const updateTopic = async (req, res) => {
  const fannomi = req.params.fannomi;
  const topicName = req.params.topicName;
  const updates = req.body;

  try {
    const lesson = await Lesson.findOne({ nomi: fannomi });
    if (lesson) {
      const topic = lesson.topics.find((topic) => topic.name === topicName);
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
    console.error("Error in updateTopic:", error);
    res.status(500).json({ message: "Mavzuni yangilashda xatolik" });
  }
};

// Mavzuni o'chirish (nomi bo'yicha)
const deleteTopic = async (req, res) => {
  const fannomi = req.params.fannomi;
  const topicName = req.params.topicName;

  console.log("fannomi: ", fannomi);
  console.log("topicName: ", topicName);

  try {
    const lesson = await Lesson.findOne({ nomi: fannomi });
    if (lesson) {
      lesson.topics = lesson.topics.filter((topic) => topic.name !== topicName);
      await lesson.save();
      res.json({ message: "Mavzu muvaffaqiyatli o'chirildi" });
    } else {
      res.status(404).json({ message: "Fan topilmadi" });
    }
  } catch (error) {
    console.error("Error in deleteTopic:", error);
    res.status(500).json({ message: "Mavzuni o'chirishda xatolik" });
  }
};

module.exports = {
  addTopic,
  updateTopic,
  deleteTopic,
  getTopic,
  getTopics,
};
