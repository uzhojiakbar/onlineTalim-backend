const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({ error: "Token topilmadi" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token topilmadi" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(400).json({ error: "Noto'g'ri token" });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};

const isTeacher = (req, res, next) => {
  if (req.user.role !== "teacher") {
    return res.status(403).json({ message: "Access denied. Teachers only." });
  }
  next();
};

const isTeacherOrAdmin = (req, res, next) => {
  console.log(req.user);

  if (!req.user || !req.user.role) {
    return res
      .status(403)
      .json({ message: "Role aniqlanmadi yoki mavjud emas" });
  }

  if (req.user.role === "admin" || req.user.role === "teacher") {
    console.log(req.user);

    return next();
  }
  res.status(403).json({ message: "Access denied" });

  next();
};

module.exports = { verifyToken, isAdmin, isTeacher, isTeacherOrAdmin };
