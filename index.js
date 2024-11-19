const express = require("express");
const dbconnect = require("./config/db");
const cors = require("cors");
dbconnect();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", require("./Admin/register"));
app.post("/login", require("./Admin/login"));
app.post("/booking", require("./Admin/bookTravel"));
app.post("/contactUs", require("./Admin/contactUs"));

app.listen(2000, () => {
    console.log("Server is running on port 2000");
})