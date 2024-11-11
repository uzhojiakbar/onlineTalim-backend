// * Yangi dars qo'shish (faqat role admin yoki teacher bolsa)

// ? API: /api/lessons

// ? Yuborish kerak bo`lgan malumot
//     {
//       name: "1-dars: Algebra",
//       desc: "Algebra kirish",
//       embed: "https:///",
//     },

// ? Template

const fannomi = "Kompyuter tizimlari va tarmoqlari";
const newLesson = {
  name: "1-dars",
  desc: "1-darsga Xush kelibsiz. Bu darsda....",
  embed: "link",
};

fetch(`http://localhost:5000/api/topic/${fannomi}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MmRmYTA5NjU1YTIwNDU4NDAyMGEyNCIsInVzZXJuYW1lIjoiYXNkLXRlYWNoZXIiLCJmaXJzdG5hbWUiOiJUZWFjaGVyIHRlc3QiLCJsYXN0bmFtZSI6Ik11cm9kaWxsYXlldiIsImdyb3VwIjoiMzYtYXR0LTIzIiwicm9sZSI6InRlYWNoZXIiLCJpYXQiOjE3MzEzMDIyMDksImV4cCI6MTczMTMwNTgwOX0.0_DqnkuVU9gDBMqxKpkUuCVOntSxPKrDWUS0wdktAWI", // Token qo'yiladi
  },
  body: JSON.stringify(newLesson),
})
  .then((response) => response.text())
  .then((text) => {
    console.log("Response text:", text);
    return JSON.parse(text);
  })
  .then((data) => console.log("Yangi dars qo'shildi:", data))
  .catch((error) => console.error("Xatolik fornt:", error));
