const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoutes");
const AppError = require("./utils/AppError");
// const Email = require("./utils/Email");

//* Controllers
const errorController = require("./controllers/errorController");
const Email = require("./utils/Email");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//* Routes
app.use("/api/user", userRoutes);

// app.post("/api/email", (req, res, next) => {
//     new Email();
//     res.send("Email sent");
// });

app.all("*", (req, res, next) => {
    return next(new AppError(`Route ${req.originalUrl} not found`, 404));
});

app.use(errorController);

module.exports = app;
