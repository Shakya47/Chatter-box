const express = require("express");
const dotenv = require("dotenv");
const data = require("./data/data");
const connectDB = require("./config/db");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", require("./routes/userRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
