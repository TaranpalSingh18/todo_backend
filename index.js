const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/user"); 


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


mongoose
  .connect("mongodb://127.0.0.1:27017/task")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

app.use("/api", userRoutes); 

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = 7000;
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
