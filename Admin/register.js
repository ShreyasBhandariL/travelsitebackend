const loginModal = require("../Models/login");

const register = async (req, res) => {
  const { name,email, password } = req.body;
  const data = await loginModal({ name,email, password });
  if (data) {
      await  data.save();
    res.status(200).json({ message: "Registered in Successfully" });
  }
};

module.exports = register;
