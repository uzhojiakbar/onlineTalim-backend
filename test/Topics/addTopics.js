// * Yangi dars qo'shish (faqat role admin yoki teacher bolsa)

// ? API: /api/lessons

// ? Yuborish kerak bo`lgan malumot
//     {
//       name: "1-dars: Algebra",
//       desc: "Algebra kirish",
//       embed: "https:///",
//     },

// ? Template

const fannomi = "Matematika";
const newLesson = {
  name: "dars 2",
  desc: "desc 2",
  embed: "link",
};

fetch(`http://localhost:5000/api/topic/${fannomi}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer TOKEN_QOYING", // Token qo'yiladi
  },
  body: JSON.stringify(newLesson),
})
  .then((response) => response.json())
  .then((data) => console.log("Yangi dars qo'shildi:", data))
  .catch((error) => console.error("Xatolik:", error));
