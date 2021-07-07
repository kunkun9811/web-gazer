/* This file is for running PM2 on the remote server to server the site */
const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();

console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`);
console.log(`process.eng.PORT_NUMBER = ${process.env.PORT_NUMBER}`);

const PORT_NUMBER = process.env.NODE_ENV.trim() === "production" ? parseInt(process.env.PORT_NUMBER) : 3000;

// specify build folder as the production directory
app.use(express.static(path.join(__dirname, "./public_html/build")));

// NOTE: It is important to add '*'
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./public_html/build", "index.html"));
});

console.log(`Listening on port ${PORT_NUMBER}...`);

app.listen(PORT_NUMBER);
