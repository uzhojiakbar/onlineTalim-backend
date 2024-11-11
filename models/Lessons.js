const mongoose = require("mongoose");

const TopicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  embed: { type: String, required: true },
});

const LessonSchema = new mongoose.Schema({
  nomi: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
  teacher: { type: String, required: true },
  views: { type: Number, default: 0 },
  topics: [TopicSchema],
});

const Lesson = mongoose.model("Lesson", LessonSchema);
module.exports = Lesson;
