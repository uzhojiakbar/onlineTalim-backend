const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/userRoutes");
const topicRoutes = require("./routes/topicRoutes");

const LessonsRoutes = require("./routes/lessonRoutes");
const TestRoutes = require("./routes/testRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Router
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.use("/api/lessons", LessonsRoutes);
app.use("/api/topic", topicRoutes);
app.use("/api/test", TestRoutes);

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Online Talim backend</title>

        <style>
          body{
            background-color: black;
            color:white;
          }
        </style>
      </head>
      <body>
        <center>
          <h1>Online talim backend</h1>
        </center>
        <br><br><br>
      </body>
    </html>
    `);
});

// MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDBga muvaffaqiyatli ulandi"))
  .catch((err) => console.error("MongoDBga ulanishda xatolik:", err));

// Serverni ishga tushirish
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server ${PORT}-portda ishga tushdi`));
