const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Parollarni ko'rsatmaslik
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error. Could not get users." });
  }
};

const GetUser = async (req, res) => {
  const username = req.params.username;

  try {
    const user = await User.find({ username }).select("-password"); // Parollarni ko'rsatmaslik
    res.status(200).json(user[0]);
  } catch (error) {
    res.status(500).json({ message: "Server error. Could not get users." });
  }
};

// Darsni yangilash
const updateUser = async (req, res) => {
  const username = req.params.username;
  const updates = req.body;

  try {
    const updateUser = await User.findOneAndUpdate({ username }, updates, {
      new: true,
      runValidators: true,
    });
    if (updateUser) {
      res.json(updateUser);
    } else {
      res.status(404).json({ message: "Foydaluvchi topilmadi" });
    }
  } catch (error) {
    console.error("Error in updateLesson:", error);

    if (error.name === "ValidationError") {
      res
        .status(400)
        .json({ message: "Ma'lumotlar to'g'ri emas", errors: error.errors });
    } else {
      res
        .status(500)
        .json({ message: "Foydaluvchi yangilashda server xatosi yuz berdi" });
    }
  }
};
module.exports = { getAllUsers, GetUser, updateUser };
