const express = require('express');
const router = express.Router();
const https = require('https');

const frontEndUrl = 'http://localhost:4200';

const userFacts = [];


//Post 
router.post('/', function(req, res)
    {
        const fact = req.body;
        
        userFacts.push(fact)

        //TODO: check for errors

        // // Header for avoiding cors block from my front end
        // res.header('Access-Control-Allow-Origin', frontEndUrl);
        
        // //Respond back with the data
        // res.send(req.body);
        
    }
);




module.exports = router;