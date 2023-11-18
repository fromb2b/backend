const express = require("express");
const app = express();
const port = process.env.PORT || 80;
const cors = require("cors");
const betonData = require("./beton");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, res) => {
  res.json(betonData);
});

app.listen(port, () => {});
