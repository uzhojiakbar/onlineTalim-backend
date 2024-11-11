// * Yangi dars qo'shish (faqat role admin yoki teacher bolsa)

// ? API: /api/lessons

// ? Template

const fannomiToDelete = "Kompyuter tizimlari va tarmoqlari test"; // O'chiriladigan fanning nomi

fetch(`http://localhost:5000/api/lessons/lesson/${fannomiToDelete}`, {
  method: "DELETE",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MmRmYTA5NjU1YTIwNDU4NDAyMGEyNCIsInVzZXJuYW1lIjoiYXNkLXRlYWNoZXIiLCJmaXJzdG5hbWUiOiJUZWFjaGVyIHRlc3QiLCJsYXN0bmFtZSI6Ik11cm9kaWxsYXlldiIsImdyb3VwIjoiMzYtYXR0LTIzIiwicm9sZSI6InRlYWNoZXIiLCJpYXQiOjE3MzEzMDg0NjJ9.D1_rBWF36DHhpGrgoemgdoutZueh54smn0gh4NN9n3k", // Token qo'yiladi
  },
})
  .then((response) => response.json())
  .then((data) => console.log("Dars o'chirildi:", data))
  .catch((error) => console.error("Xatolik:", error));
