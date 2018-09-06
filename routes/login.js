const express = require('express');
const router = express.Router();
const database = require("../database");

router.post("/login", (request, response, next) => {
    const error = new Error("Forbidden");
    error.status = 401;

    if (!request.body && !request.body.username && !request.body.password) {
        throw error;
    }

    const users = database.users.filter(user =>
        user.username == request.body.phone &&
        user.password === request.body.password);

    if (!users.length) {
        throw error;
    }

    response.send(users[0]);
});

module.exports = router;