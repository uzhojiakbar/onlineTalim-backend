// * Darsni yangilash (faqat role admin yoki teacher bolsa)

// ? API: /api/lessons/lesson/${fannomiToUpdate}

// ? Yuborish kerak bo`lgan malumot
//{
// yangilanadiganKey: "yangilanadiganvalue"
// };

// ? Qaytadigan malumot
// {
//   _id: '',
//   nomi: '',
//   desc: '',
//   teacher: '',
//   views: ,
//   topics: [
//     {
//       name: '',
//       desc: '',
//       embed: '',
//       _id: ''
//     }
//      ...
//   ],

//   __v: 0
// }

// ? Template

const fannomiToUpdate = "Matematika"; // O'zgartiriladigan fanning nomi
const updates = {
  desc: "Yangilangan matematika darsi",
};

fetch(`http://localhost:5000/api/lessons/lesson/${fannomiToUpdate}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MmRmYTA5NjU1YTIwNDU4NDAyMGEyNCIsInVzZXJuYW1lIjoiYXNkLXRlYWNoZXIiLCJmaXJzdG5hbWUiOiJUZWFjaGVyIHRlc3QiLCJsYXN0bmFtZSI6Ik11cm9kaWxsYXlldiIsImdyb3VwIjoiMzYtYXR0LTIzIiwicm9sZSI6InRlYWNoZXIiLCJpYXQiOjE3MzEwNjY0MDAsImV4cCI6MTczMTA3MDAwMH0.7DYIREV7vsT4dIZQIjdMvWs8QWsT6Y2nnnTO6USb1e4", // Token qo'yiladi
  },
  body: JSON.stringify(updates),
})
  .then((response) => response.json())
  .then((data) => console.log("Dars yangilandi:", data))
  .catch((error) => console.error("Xatolik:", error));
