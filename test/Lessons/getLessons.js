// ? API: /api/lessons

// ? QAYTADIGAN MALUMOT
// [
//   {
//     _id: '672df0232bebbd74f5a412db',
//     nomi: 'Matematika',
//     desc: 'Matematika darsi',
//     teacher: 'Olim Aliyev',
//     views: 10,
//     topics: [ [Object] ],
//     __v: 0
//   },
//   ...
// ]

// ? Template

fetch("http://localhost:5000/api/lessons")
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
