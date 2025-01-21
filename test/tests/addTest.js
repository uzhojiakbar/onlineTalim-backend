// * Yangi test qo'shish (faqat role admin yoki teacher bolsa)

const fannomi = "birinchi fan";
const darsnomi = "dars";
const newTest = {
  title: "Test uchun test ))))",
  variant: [
    {
      name: "Test 1",
      correct: true,
    },
    {
      name: "Test 2",
      correct: false,
    },
    {
      name: "Test 3",
      correct: false,
    },
    {
      name: "Test 4",
      correct: false,
    },
  ],
};

fetch(`http://localhost:5000/api/test/${fannomi}/${darsnomi}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OTAxY2JiYjFlNmNjN2E0MjI0ZTIzYyIsInVzZXJuYW1lIjoib3Bpc2lzIiwiZmlyc3RuYW1lIjoiSG9qaWFrYmFyIiwibGFzdG5hbWUiOiJNdXJvZGlsbGF5ZXYiLCJncm91cCI6IjM2LUFUVC0yMyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTczNzQ5ODI2NX0.J4M4ZRGfrrT_BzX2RXYnwdJsq2BpARbMH3sMVGFv6mY", // Token qo'yiladi
  },
  body: JSON.stringify(newTest),
})
  .then((response) => response.text())
  .then((text) => {
    console.log("Response text:", text);
    return JSON.parse(text);
  })
  .then((data) => console.log("Yangi dars qo'shildi:", data))
  .catch((error) => console.error("Xatolik fornt:", error));
