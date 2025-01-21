// * Yangi dars qo'shish (faqat role admin yoki teacher bolsa)

// ? API: /api/lessons

// ? Template

const fannomi = "Matematika"; // O'chiriladigan fanning nomi
const topicName = "Limitlar"; // O'chiriladigan fanning nomi

fetch(`http://localhost:5000/api/topic/${fannomi}/${topicName}`, {
  method: "DELETE",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjA3ZTg5NzBhN2FiOWE1ZjEwMTJiMyIsInVzZXJuYW1lIjoiYXNkLWFkbWluIiwiZmlyc3RuYW1lIjoidXNlciB0ZXN0IiwibGFzdG5hbWUiOiJNdXJvZGlsbGF5ZXYiLCJncm91cCI6IjM2LWF0dC0yMyIsInJvbGUiOiJ0ZWFjaGVyIiwiaWF0IjoxNzM0Mzc3NDU0fQ.JlrOH3EwIM57iLGKNEQHp7jB6R4hDjmUw5L4GGZnW-w", // Token qo'yiladi
  },
})
  .then((response) => response.json())
  .then((data) => console.log("Dars o'chirildi:", data))
  .catch((error) => console.error("Xatolik:", error));
