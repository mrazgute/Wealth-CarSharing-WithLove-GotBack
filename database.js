//TODO: Use real persistent storage mate
const database = {
    users: [
        {
            id: 1,
            name: "Jonas Antanaitis",
            type: "DRIVER",
            phone: "+37012345678",
            shortName: "JOANT",
            locationId: 1,
            password: "password"
        }, {
            id: 2,
            name: "Gediminas Morkys",
            type: "DRIVER",
            phone: "+37012345679",
            shortName: "GMO",
            locationId: 3,
            password: "password"
        }, {
            id: 3,
            name: "Valentas Milčius",
            type: "PASSENGER",
            phone: "+37012345670",
            shortName: "VALM",
            locationId: 1,
            password: "password"
        }
    ],
    districts: [
        { id: 1, name: "Centras" },
        { id: 2, name: "Verkiai" },
        { id: 3, name: "Žirmūnai" },
        { id: 4, name: "Šeškinė" }
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

};

module.exports = database;