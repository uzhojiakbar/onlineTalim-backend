// ? API: /api/lessons/lesson/${fannomi}

// ? QAYTADIGAN MALUMOT
// {
//     _id: '672df0232bebbd74f5a412db',
//     nomi: '',
//     desc: '',
//     teacher: '',
//     views: 0,
//     __v: 0
//   }

// ? Template
const fannomi = "Matematika"; // Fanning nomi

fetch(`http://localhost:5000/api/lessons/lesson/${fannomi}`)
  .then((response) => {
    if (!response.ok) {
      return response.text().then((text) => {
        throw new Error(`Xatolik: ${text}`);
      });
    }
    return response.json();
  })
  .then((data) => console.log("Dars:", data))
  .catch((error) => console.error("Xatolik:", error));
