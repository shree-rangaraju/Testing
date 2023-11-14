const express = require("express");
const app = express();
app.get("/Data", (req, res) => {
  console.log("request received!");
  res.send("DONEE");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
