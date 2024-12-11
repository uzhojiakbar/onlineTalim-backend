// ? API: /api/users

// ? QAYTADIGAN MALUMOT

// ? Template

fetch("http://localhost:5000/api/users")
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
