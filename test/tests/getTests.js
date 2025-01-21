const fannomi = "birinchi fan";
const darsnomi = "dars";
fetch(`http://localhost:5000/api/test/${fannomi}/${darsnomi}`)
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
