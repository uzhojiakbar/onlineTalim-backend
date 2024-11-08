// ? API: /api/topic/{fannomi}

// ? QAYTADIGAN MALUMOT
// [
//     {
//       name: '1-dars: Algebra',
//       desc: 'Algebra kirish',
//       embed: 'https:///',
//       _id: '672e02d5773e2cd98d6b4a8d'
//     }
//      ...
// ]

// ? Template

const fannomi = "Matematika";

fetch(`http://localhost:5000/api/topic/${fannomi}`)
  .then((response) => {
    if (!response.ok) {
      return response.text().then((text) => {
        throw new Error(`Xatolik: ${text}`);
      });
    }
    return response.json();
  })
  .then((data) => console.log("Barcha mavzular:", data))
  .catch((error) => console.error("Xatolik:", error));
