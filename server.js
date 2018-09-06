const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const loginController = require("./routes/login");
const usersController = require("./routes/users");
const driversController = require("./routes/drivers");

app.use(bodyParser.json());

app.get("/status", (req, res, next) => {
    res.sendStatus(200);
});

app.use("/", loginController);
app.use("/", usersController);
app.use("/", driversController);

app.listen(process.env.PORT || 5000, () => console.log("LoveRide is listening on port 5000!"));

// Global error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ errorMessage: err.message });
});