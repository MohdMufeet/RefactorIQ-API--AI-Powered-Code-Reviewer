const express = require("express");
const main = require("./services/google-ai.service");

const app = express();

app.use(express.json());

app.get("/", async(req, res) => {
  const prompt = "hii";
  
  try{
  const response = await main(prompt);
  res.send("Hello from the server"+response);
  }catch(error){
    console.error("Gemini API Error:", error);
    throw error;
  }
 
});

// app.use("/ai",)

module.exports = app;
