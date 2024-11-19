const Contact_requests = require("../Models/contactUs");

const ContactUs = async (req, res) => {
  const { name, email, subject, message } = req.body;
  const data = new Contact_requests({ Name: name, email, subject, message });
  if (name && email && subject && message) {
      data.save();
      res.status(200).send({ message: "The mail sent successfully!!!" });
  } else {
    res.status(403).send({ message: "Please enter all the details" });
  }
};

module.exports = ContactUs;
