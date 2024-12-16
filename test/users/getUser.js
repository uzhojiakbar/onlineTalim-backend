// ? API: /api/users/:username

// ? QAYTADIGAN MALUMOT
// {
//     _id: '67607e8970a7ab9a5f1012b3',
//     username: 'asd-admin',
//     firstname: 'user test',
//     lastname: 'Murodillayev',
//     group: '36-att-23',
//     role: 'teacher',
//     __v: 0
//   }

// ? Template

const username = "asd-admin";

fetch("http://localhost:5000/api/users/" + username, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjA4MzgyMjU3NDBhZmJiODQ3Nzk2ZiIsInVzZXJuYW1lIjoiYXNkLWFkbWluMSIsImZpcnN0bmFtZSI6InVzZXIgdGVzdCIsImxhc3RuYW1lIjoiTXVyb2RpbGxheWV2IiwiZ3JvdXAiOiIzNi1hdHQtMjMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzQzNzgzODR9.J5FFdt99_rJqz_Fbx8DwUC37GcyNXArvBsFIMjqz81g", // Token qo'yiladi
  },
})
  .then((response) => {
    if (!response.ok) {
      return response.text().then((text) => {
        throw new Error(`Xatolik: ${text}`);
      });
    }
    return response.json();
  })
  .then((data) => console.log("Barcha darslar:", data))
  .catch((error) => console.error("Xatolik:", error));
