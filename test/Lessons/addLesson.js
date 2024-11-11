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
  nomi: "Kompyuter tizimlari va tarmoqlar",
  desc: "Bu dars orqali juda ko'p malumot olishingiz mumkin. ",
  teacher: "Nomalum",
  views: 1,
};

fetch("http://localhost:5000/api/lessons", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MmRmYTA5NjU1YTIwNDU4NDAyMGEyNCIsInVzZXJuYW1lIjoiYXNkLXRlYWNoZXIiLCJmaXJzdG5hbWUiOiJUZWFjaGVyIHRlc3QiLCJsYXN0bmFtZSI6Ik11cm9kaWxsYXlldiIsImdyb3VwIjoiMzYtYXR0LTIzIiwicm9sZSI6InRlYWNoZXIiLCJpYXQiOjE3MzEzMDIyMDksImV4cCI6MTczMTMwNTgwOX0.0_DqnkuVU9gDBMqxKpkUuCVOntSxPKrDWUS0wdktAWI", // Token qo'yiladi
  },
  body: JSON.stringify(newLesson),
})
  .then((response) => response.json())
  .then((data) => console.log("Yangi dars qo'shildi:", data))
  .catch((error) => console.error("Xatolik:", error));
