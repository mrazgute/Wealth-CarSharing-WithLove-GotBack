const express = require('express');
const router = express.Router();
const database = require("../database");

router.post("/user", (request, response, next) => {
    const error = new Error("Entity validation error.");
    error.status = 400;

    if (!request.body) {
        throw error;
    }

    const { name, type, phone, shortName } = request.body;
    if (!name || !type || !phone) {
        throw error;
    }

    const maxId = Math.max.apply(null, database.users.map(user => user.id));

    database.users.push({
        id: maxId + 1,
        name,
        type,
        phone,
        shortName
    });

    response.sendStatus(201);
});

router.patch("/user/:id/type", (request, response, next) => {
    const error = new Error("Entity validation error.");
    error.status = 400;

    if (!request.body) {
        throw error;
    }

    const userId = parseInt(request.params.id);
    const type = request.body.type;

    if (!userId || !type) {
        throw error;
    }

    var user = database.users.filter(user => user.id === userId)[0];
    user.type = type;
    response.sendStatus(200);
});

router.get("/user/:id", (request, response, next) => {
    const userId = parseInt(request.params.id);

    if (!userId) {
        const error = new Error("Entity validation error.");
        error.status = 400;
        throw error;
    }

    var user = database.users.filter(user => user.id === userId)[0];

    if (user) {
        response.send(user);
    }
    else response.sendStatus(404);
});


module.exports = router;