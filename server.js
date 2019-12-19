const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const port = 3000;

const app = express();

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log("server listening on port ${port}"));