// * Yangi dars qo'shish (faqat role admin yoki teacher bolsa)

// ? API: /api/lessons

// ? Template

const fannomiToDelete = "Matematika"; // O'chiriladigan fanning nomi

fetch(`http://localhost:5000/api/lessons/lesson/${fannomiToDelete}`, {
  method: "DELETE",
  headers: {
    Authorization: "Bearer TOKEN_UCHUN_JOY", // Token qo'yiladi
  },
})
  .then((response) => response.json())
  .then((data) => console.log("Dars o'chirildi:", data))
  .catch((error) => console.error("Xatolik:", error));
