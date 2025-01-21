const mongoose = require("mongoose");

const VariantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  correct: { type: Boolean, required: true },
});

const TestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  variant: [VariantSchema],
});

const TopicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  embed: { type: String, required: true },
  test: [TestSchema],
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

// [
//   {
//     id: 1,
//     Title: "Web dasturlash asoslari nimalardan iborat?",
//     variant: [
//       { id: 1, name: "HTML,CSS,JAVASCRIPT", correct: true },
//       { id: 2, name: "Python", correct: false },
//       { id: 3, name: "PHP,Pascal, C++", correct: false },
//       { id: 4, name: "Men dizaynerman)", correct: false },
//     ],
//   },
// ];
