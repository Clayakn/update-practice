const express = require('express');
const bodyParser = require('body-parser');
const c = require('./controller');

const app = express(); 

app.use(bodyParser.json());

app.put('/put/:id', c.update);
app.get('/data', c.read);


app.listen(4000, () => console.log("Server is listeing on 4000"));