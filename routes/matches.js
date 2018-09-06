const express = require('express');
const uuid = require('uuid/v1');
const router = express.Router();
const database = require("../database");

router.post("/match", (request, response, next) => {    
    const error = new Error("Entity validation error.");
    error.status = 400;

    if (!request.body) {
        throw error;
    }

    const { passengerId, driverId, locationId, date } = request.body;
    if (!passengerId || !driverId || !locationId || !date) {
        throw error;
    }

    database.matches.push({
        id: uuid(),
        passengerId: parseInt(passengerId),
        driverId: parseInt(driverId),
        locationId: parseInt(locationId),
        date,
        driverAck: false
    });

    response.sendStatus(201);
});

router.patch("/match/:id", (request, response, next) => {    
    const error = new Error("Entity validation error.");
    error.status = 400;

    if (!request.params.id) {
        throw error;
    }

    const matchId = request.params.id;
    const match = database.matches.filter(match => match.id === matchId)[0];
    match.driverAck = true;
    response.sendStatus(200);
});

router.get("/match/passenger/", (request, response, next) => {    
    database.PASSENGER_SAID_YES = true;
    response.sendStatus(200);
});

router.get("/match/driver/", (request, response, next) => {    
    database.DRIVER_SAID_YES = true;
    response.sendStatus(200);
});

router.get("/match/driver/reset/", (request, response, next) => {
    database.DRIVER_SAID_YES = false;
    response.sendStatus(200);
});

router.get("/match/passenger/reset/", (request, response, next) => {
    database.PASSENGER_SAID_YES = false;
    response.sendStatus(200);
});

module.exports = router;