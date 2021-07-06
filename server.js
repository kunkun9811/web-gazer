/* This file is for running PM2 on the remote server */
const express = require("express");
const path = require("path");
const app = express();

const PORT_NUMBER = process.env.NODE_ENV === "production" ? process.env.PORT_NUMBER : 3000;

// specify build folder as the production directory
app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT_NUMBER);
