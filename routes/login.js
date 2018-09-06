const express = require('express');
const router = express.Router();
const database = require("../database");

router.post("/login", (request, response, next) => {
    const error = new Error("Forbidden");
    error.status = 401;

    if (!request.body && !request.body.phone) {
        throw error;
    }

    const users = database.users.filter(user => user.phone == request.body.phone);
    if (!users.length) {
        throw error;
    }

    response.send(users[0]);
});

module.exports = router;