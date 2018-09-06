const express = require('express');
const router = express.Router();
const database = require("../database");

router.get("/drivers", (request, response, next) => {
    var drivers = database.users.filter(user => user.type === "DRIVER");
    response.send(drivers);
});

router.get("/drivers/:locationId", (request, response, next) => {
    const locationId = parseInt(request.params.locationId);
    var drivers = database.users.filter(user => user.locationId === locationId);
    response.send(drivers);
});

module.exports = router;