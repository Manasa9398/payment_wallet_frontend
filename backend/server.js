const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Backend is running...");
});

app.listen(3000, () => {
    console.log("Server is running on port 5000");
});
