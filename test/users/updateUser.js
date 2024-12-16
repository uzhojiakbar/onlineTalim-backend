const username = "devoloper";

const updates = {
  lastname: "familiya yangilandi",
  role: "user",
};

fetch(`http://localhost:5000/api/users/${username}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjA4MzgyMjU3NDBhZmJiODQ3Nzk2ZiIsInVzZXJuYW1lIjoiYXNkLWFkbWluMSIsImZpcnN0bmFtZSI6InVzZXIgdGVzdCIsImxhc3RuYW1lIjoiTXVyb2RpbGxheWV2IiwiZ3JvdXAiOiIzNi1hdHQtMjMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzQzNzgzODR9.J5FFdt99_rJqz_Fbx8DwUC37GcyNXArvBsFIMjqz81g", // Token qo'yiladi
  },
  body: JSON.stringify(updates),
})
  .then((response) => response.json())
  .then((data) => console.log("User yangilandi:", data))
  .catch((error) => console.error("Xatolik:", error));
