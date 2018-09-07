//TODO: Use real persistent storage mate
const database = {
    users: [
        {
            id: 1,
            name: "Rimantas",
            type: "DRIVER",
            phone: "+37012345678",
            username: "rimantas",
            locationId: 1,
            password: "password"
        }, {
            id: 2,
            name: "Slavikas",
            type: "DRIVER",
            phone: "+37012345679",
            username: "slavikas",
            locationId: 3,
            password: "password"
        }, {
            id: 3,
            name: "Adelė",
            type: "PASSENGER",
            phone: "+37012345670",
            username: "adele",
            locationId: 1,
            password: "password"
        }
    ],
    locations: [
        { id: 1, name: "Antakalnis" },
        { id: 2, name: "Verkiai" },
        { id: 3, name: "Žirmūnai" },
        { id: 4, name: "Šeškinė" },
        { id: 5, name: "Šeškinė" }
    ],
    matches: [
        {
            id: 1,
            driverId: 1,
            passengerId: 2,
            locationId: 3,
            time: new Date("2018-09-06T10:00Z")
        }
    ],
    DRIVER_SAID_YES: false,
    PASSENGER_SAID_YES: false

};

module.exports = database;