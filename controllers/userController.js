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

module.exports = { getAllUsers, GetUser };
