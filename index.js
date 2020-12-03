const express = require("express");
const path = require("path");

const port = process.env.port || 5000;
const app = express();

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "about.html"));
});
app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});

