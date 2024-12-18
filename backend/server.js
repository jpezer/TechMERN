require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./index");

const DB_URL = process.env.MONGO_URL.replace(
    "<db_password>",
    process.env.MONGO_PASSWORD
);

mongoose
    .connect(DB_URL)
    .then(() => {
        console.log("Database connection successful!");
    })
    .catch((err) => {
        console.log(err);
    });

const port = process.env.PORT || 4000;

app.listen(port, (err) => {
    if (err) console.log("Application failed to start", err);
    else console.log(`Application started on port ${port}`);
});
