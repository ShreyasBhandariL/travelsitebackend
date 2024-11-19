const loginModal = require("../Models/login");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await loginModal.findOne({ email, password });
    if (data) {
      const { password, ...userWithoutPassword } = data.toObject();
      res
        .status(200)
        .json({ message: "Logged in Successfully", data: userWithoutPassword });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = login;
