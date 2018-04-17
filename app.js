"use strict";

const express = require("express");
const app = express();

app.set("view engine", "pug");

app.use(express.static(__dirname + "/public"));

app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist/")
);

app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/about", (req, res, next) => {
  res.render("about");
});

app.get("/inventory", (req, res, next) => {
  res.render("inventory");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
