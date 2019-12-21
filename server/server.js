const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');
const http = require('http');
const https = require('https');
const facts = require('./routes/facts-route');
const myFacts = require('./routes/my-facts-route');
const port = 3000;

const app = express();



// Parsers
app.use(bodyParser.json());
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api/facts' ,facts);

app.use('/api/myfacts',myFacts);


app.listen(port, () => console.log("server listening on port " + port));