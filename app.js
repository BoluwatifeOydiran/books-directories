const express = require("express");
const ejs = require("ejs");
const logger = require("morgan");

const indexRoutes = require("./routes/indexRoutes");
const Mongoose = require("mongoose");

const app = express();

const port = process.env.PORT || 3000;

// using ejs as views
app.set("view engine", "ejs");

// setting up middleware
app.use(express.static("public/"));
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connecting to mongodb
const lchURI = "mongodb://localhost/library";
const dbURI =
  "mongodb+srv://weezard:code1234@cluster0.k7lcd.mongodb.net/library";

Mongoose.connect(dbURI || lchURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((result) => {
    app.listen(port, () => {
      console.log("App listening on port 3000!");
    });
  })
  .catch((err) => console.log(err));

app.use(indexRoutes);

app.use((req, res, next) => {
  res.status(404).render("404");
});

// error handler function
app.use((req, res, next) => {
  const err = new console.error("Not found");
  err.status = 404;
  next();
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    err: {
      message: error.message,
    },
  });
});
