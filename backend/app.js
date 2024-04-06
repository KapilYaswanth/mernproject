const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const placeroutes = require("./routes/places");
const userroutes = require("./routes/users");
const HttpError = require("./models/http-error");

const uri =
  "mongodb+srv://admin:root@cluster0.ouknejc.mongodb.net/?retryWrites=true&w=majority&appName=cluster0";

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); //used for forms
app.use(bodyParser.json());

app.use("/users", userroutes);
app.use("/places", placeroutes);

app.use((req, res, next) => {
  const err = new HttpError(401, "route not support");
  next(err);
});

// mongoose
//   .connect(uri)
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch(() => {
//     console.log("Could not connect to MongoDB");
//   });

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "try later",
  });
});

app.listen(3001, "127.0.0.1", () => {
  console.log(`Server is running on http://localhost:${3001}`);
});
