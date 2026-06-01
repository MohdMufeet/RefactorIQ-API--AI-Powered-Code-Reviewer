const express = require("express");
const main = require("./services/google-ai.service.js");
const getResponse = require("./routes/ai.route.js");

const app = express();

app.use(express.json());

app.get("/", async(req, res) => {
  res.send("Hello World!");
});

app.use("/ai",getResponse);

module.exports = app;
