// ? API: /api/topic/${fannomi}/${mavzuNomi}/

// ? QAYTADIGAN MALUMOT
// {
//   name: '',
//   desc: '',
//   embed: '',
//   _id: ''
// }

// ? Template
const fannomi = "Kompyuter tizimlari va tarmoqlari";
const mavzuNomi = "1-dars";

fetch(`http://localhost:5000/api/topic/${fannomi}/${mavzuNomi}/`)
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
