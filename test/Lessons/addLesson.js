// * Yangi dars qo'shish (faqat role admin yoki teacher bolsa)

// ? API: /api/lessons

// ? Yuborish kerak bo`lgan malumot
//{
//   nomi: "Matematika" ,
//   desc: "Matematika darsi",
//   teacher: "Olim Aliyev",
//   views: 10,
//   topics: [
//     {
//       name: "1-dars: Algebra",
//       desc: "Algebra kirish",
//       embed: "https:///",
//     },
//   ],
// };

// ? Template

const newLesson = {
  nomi: "Matematika",
  desc: "Matematika darsi",
  teacher: "Olim Aliyev",
  views: 10,
  topics: [
    {
      name: "1-dars: Algebra",
      desc: "Algebra kirish",
      embed: "https:///",
    },
  ],
};

fetch("http://localhost:5000/api/lessons", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer TOKEN_YOZING", // Token qo'yiladi
  },
  body: JSON.stringify(newLesson),
})
  .then((response) => response.json())
  .then((data) => console.log("Yangi dars qo'shildi:", data))
  .catch((error) => console.error("Xatolik:", error));
