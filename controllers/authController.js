const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res
      .status(201)
      .json({ message: "Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tdi" });
  } catch (error) {
    res.status(400).json({ error: "Ro'yxatdan o'tishda xatolik" });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user)
      return res.status(400).json({ error: "Foydalanuvchi topilmadi" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Noto'g'ri parol" });

    console.log(user);

    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.json({ token, role: user.role, username: user.username });
  } catch (error) {
    res.status(500).json({ error: "Kirishda xatolik" });
  }
};
