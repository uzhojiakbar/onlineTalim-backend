// fetch("http://localhost:5000/api/auth/register", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     username: "asd1",
//     password: "asd2",
//     firstname: "Hojiakbar",
//     lastname: "Murodillayev",
//     group: "36-att-23",
//   }),
// })

// *
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error))

// fetch("http://localhost:5000/api/auth/login", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     username: "asd11",
//     password: "asd2",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error))
//

// * Barcha darslarni olish

// fetch("http://localhost:5000/api/lessons")
//   .then((response) => {
//     if (!response.ok) {
//       // Xatolik bo'lsa, xato matnini o'qib ko'rsatadi
//       return response.text().then((text) => {
//         throw new Error(`Xatolik: ${text}`);
//       });
//     }
//     // Agar JSON formatda bo'lsa, JSON formatida parse qiladi
//     return response.json();
//   })
//   .then((data) => console.log("Barcha darslar:", data))
//   .catch((error) => console.error("Xatolik:", error));

// * Yangi dars qo'shish

const newLesson = {
  id: 2,
  nomi: "Matematika",
  desc: "Matematika darsi",
  teacher: "Olim Aliyev",
  views: 10,
  topics: [
    {
      id: 1,
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
  },
  body: JSON.stringify(newLesson),
})
  .then((response) => response.json())
  .then((data) => console.log("Yangi dars qo'shildi:", data))
  .catch((error) => console.error("Xatolik:", error));
