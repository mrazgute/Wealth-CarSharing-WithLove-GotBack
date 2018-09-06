const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//DB 
const users = {};
let userSeq = 1;

app.get('/user/:id', (req, res) => {
    if(users[req.params.id]) {
        res.send(users[req.params.id]);
    } else {
        res.sendStatus(500);
    }
})

app.post('/user', (req, res) => {
    const id = userSeq;
    userSeq++;
    users[id] = {data: req.body, id: id};
    res.send(users[id]);
})
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(5000, () => console.log('Example app listening on port 5000!'))