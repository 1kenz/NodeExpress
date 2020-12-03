const express = require("express");
const path = require("path");

const port = process.env.port || 5000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (request, response) => {
  // response.sendFile(path.join(__dirname, "about.html"));
  response.render("main");
});
app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});
