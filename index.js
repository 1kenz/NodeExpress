const express = require("express");
const path = require("path");

const port = process.env.port || 5000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/user", () => {
  res.send("User Page");
});

app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});
