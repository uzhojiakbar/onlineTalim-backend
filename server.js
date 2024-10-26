const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const buildingRoutes = require("./routes/BuildingRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Router
app.use("/api/auth", authRoutes);
app.use("/api/buildings", buildingRoutes);
app.use("/api/users", userRoutes);

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
