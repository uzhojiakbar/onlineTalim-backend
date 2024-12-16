// * QAYTADIGAN MALUMOT:

// {
//     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MmRmOTA2MTgzOTU3Njg2NmQwZjU1ZiIsInVzZXJuYW1lIjoiYXNkLWFkbWluIiwiZmlyc3RuYW1lIjoiQWRtaW4gdGVzdCIsImxhc3RuYW1lIjoiTXVyb2RpbGxheWV2IiwiZ3JvdXAiOiIzNi1hdHQtMjMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzEwNjYxODEsImV4cCI6MTczMTA2OTc4MX0.aI5dwrQ9RB9zW7PuXBwf4TFEORc40qQdFYGlqiOJTQQ',
//     id: '672df9061839576866d0f55f',
//     username: '',
//     firstname: '',
//     lastname: '',
//     group: '',
//     role: ''
//   }

fetch("http://localhost:5000/api/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "asd-admin1",
    password: "asd-admin1",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
