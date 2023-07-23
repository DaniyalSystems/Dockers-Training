// imports
const express = require("express");
const morgan = require("morgan");

// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

app.post("/billing", (req, res) => {
  console.log("Billing service data received.", req.body);
  res.send(req.body);
});


app.listen(5006);
