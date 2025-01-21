const Lesson = require("../models/Lessons"); // Assume you have a Lesson model

// Barcha testlarni olish
const getTests = async (req, res) => {
  const { fannomi, darsnomi } = req.params;

  try {
    const lesson = await Lesson.findOne({
      nomi: fannomi,
      "topics.name": darsnomi,
    });

    if (!lesson) {
      return res.status(404).json({ message: "Dars topilmadi" });
    }

    const topic = lesson.topics.find((topic) => topic.name === darsnomi);

    if (!topic || !topic.test) {
      return res.status(404).json({ message: "Testlar topilmadi" });
    }

    const testsWithoutCorrect = topic.test.map((v) => {
      return {
        title: `${v.title}`,
        id: `${v._id}`,
        fan: `${fannomi}`,
        dars: `${darsnomi}`,
        variant: v.variant.map((v2) => ({
          name: v2.name,
          id: v2._id,
        })),
      };
    });

    console.log(testsWithoutCorrect);

    res.json(testsWithoutCorrect);
  } catch (error) {
    console.error("getTests error:", error);
    res.status(500).json({ message: "Server xatoligi" });
  }
};

// Bitta testni olish
const getTest = async (req, res) => {
  const { fannomi, darsnomi, testId } = req.params;

  try {
    const lesson = await Lesson.findOne({
      name: fannomi,
      "topics.name": darsnomi,
    });

    if (!lesson) {
      return res.status(404).json({ message: "Dars topilmadi" });
    }

    const topic = lesson.topics.find((topic) => topic.name === darsnomi);
    const test = topic.tests.find((test) => test._id.toString() === testId);

    if (!test) {
      return res.status(404).json({ message: "Test topilmadi" });
    }

    res.json(test);
  } catch (error) {
    console.error("getTest error:", error);
    res.status(500).json({ message: "Server xatoligi" });
  }
};

// Yangi test qo'shish
const addTest = async (req, res) => {
  const { fannomi, darsnomi } = req.params;
  const newTest = req.body;

  try {
    const lesson = await Lesson.findOne({
      nomi: fannomi,
      "topics.name": darsnomi,
    });

    console.log(lesson);

    if (!lesson) {
      return res.status(404).json({ message: "Dars topilmadi" });
    }

    const topic = lesson.topics.find((topic) => topic.name === darsnomi);
    topic.test.push(newTest);
    await lesson.save();

    res.status(201).json(newTest);
  } catch (error) {
    console.error("addTest error:", error);
    res.status(500).json({ message: "Server xatoligi" });
  }
};

// Testni yangilash
const updateTest = async (req, res) => {
  const { fannomi, darsnomi, testId } = req.params;
  const updates = req.body;

  try {
    const lesson = await Lesson.findOne({
      name: fannomi,
      "topics.name": darsnomi,
    });

    if (!lesson) {
      return res.status(404).json({ message: "Dars topilmadi" });
    }

    const topic = lesson.topics.find((topic) => topic.name === darsnomi);
    const test = topic.tests.find((test) => test._id.toString() === testId);

    if (!test) {
      return res.status(404).json({ message: "Test topilmadi" });
    }

    Object.assign(test, updates);
    await lesson.save();

    res.json(test);
  } catch (error) {
    console.error("updateTest error:", error);
    res.status(500).json({ message: "Server xatoligi" });
  }
};

// Testni o'chirish
const deleteTest = async (req, res) => {
  const { fannomi, darsnomi, testId } = req.params;

  try {
    const lesson = await Lesson.findOne({
      name: fannomi,
      "topics.name": darsnomi,
    });

    if (!lesson) {
      return res.status(404).json({ message: "Dars topilmadi" });
    }

    const topic = lesson.topics.find((topic) => topic.name === darsnomi);
    topic.tests = topic.tests.filter((test) => test._id.toString() !== testId);
    await lesson.save();

    res.json({ message: "Test muvaffaqiyatli o'chirildi" });
  } catch (error) {
    console.error("deleteTest error:", error);
    res.status(500).json({ message: "Server xatoligi" });
  }
};

module.exports = {
  getTests,
  getTest,
  addTest,
  updateTest,
  deleteTest,
};
