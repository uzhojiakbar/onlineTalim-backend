const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { username, password, firstname, lastname, group, role } = req.body;

  if (!username || !password || !firstname || !lastname || !group) {
    res
      .status(400)
      .json({ message: "Kerakli malumotlarni hammasi yuborilmagan!" });
  }

  const user = await User.findOne({ username });
  if (user) return res.status(400).json({ error: "Foydalanuvchi mavjud" });

  try {
    const newUser = new User({
      username,
      password,
      firstname,
      lastname,
      group,
      role,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tdi" });
  } catch (error) {
    console.log(error);
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

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        group: user.group,
        role: user.role,
      },
      process.env.JWT_SECRET
    );

    res.json({
      token,
      id: user._id,
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      group: user.group,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ error: "Kirishda xatolik" });
  }
};
