// Import the express module
const express = require("express");


const app = express();


const port = 3000;


app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.post("/", (req, res) => {
  res.send({
    msg: "2+2=4"
  })
});
app.post("/a", (req, res) => {
  res.send({
    msg: "2+2=6",
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
