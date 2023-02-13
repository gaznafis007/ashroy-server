const express = require("express");
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();
const projects = require("./data/api.json");
const achievements = require("./data/achievement.json");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Ashroy API is running");
});

app.get("/projects", (req, res) => {
  res.send(projects);
});

app.get("/achievements", (req, res) => {
  res.send(achievements);
});

app.listen(port, () => {
  console.log(`Ashory server running on ${port} Port`);
});
