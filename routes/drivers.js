const express = require('express');
const router = express.Router();
const database = require("../database");

router.get("/drivers", (request, response, next) => {
    var drivers = database.users.filter(user => user.type === "DRIVER");
    response.send(drivers);
});

router.get("/driver/:id/matches", (request, response, next) => {
    const driverId = parseInt(request.params.id);
    var drivers = database.users.filter(user => user.id === driverId)[0];
    var matches = database.matches.filter(match => match.driverId === driverId);
    response.send(matches);
});

module.exports = router;