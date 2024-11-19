const bookinData = require("../Models/bookData");


const BookingData = async (req, res) => {
    const { userId,placeId, placeName, numPeople, checkInDate, checkOutDate, days } = req.body;

    if (!userId || !placeId || !placeName || !numPeople || !checkInDate || !checkOutDate || !days) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    try {
        const newBooking = new bookinData({
          userId,
          placeId,
          placeName,
          numPeople,
          checkInDate,
          checkOutDate,
          days,
        });

        newBooking.save()
        res.status(201).json({ message: "Booking successfully added", newBooking });
    } catch (error) {
        console.error("Error during booking:", error);
        res.status(500).json({ error: "There was an issue with your booking. Please try again." });
    }
}

module.exports = BookingData;