const mongoose = require("mongoose");

const bookData = new mongoose.Schema({
  userId: {type: String, require: true},
  placeId: { type: String, require: true },
  placeName: { type: String, require: true },
  numPeople: { type: Number, require: true, unique: true },
  checkInDate: { type: String, require: true },
  checkOutDate: { type: String, require: true },
  days: { type: Number, requir: true },
});

module.exports = mongoose.model("bookDatas", bookData, "bookDatas");
