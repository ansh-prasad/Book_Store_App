const express = require("express");
const app = express(


  
);
const PORT = 3000;

app.get("/", function (req, res) {
  res.send("Hello Ansh Prasad");
});

app.listen(PORT);
