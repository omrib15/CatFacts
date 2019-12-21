const express = require('express');
const router = express.Router();
const https = require('https');

const frontEndUrl = 'http://localhost:4200';

const userFacts = [];


//POST
router.post('/', function(req, res)
    {
        const fact = req.body;
        
        userFacts.push(fact)

 
        res.header('Access-Control-Allow-Origin', frontEndUrl);
        res.send({ack: "ok"});
        
        //TODO: check for errors

        
        
    }
);

//GET
router.get('/', function(req, res){
    let facts = { all: userFacts };
    res.send(facts);

    //TODO: check for errors
});



module.exports = router;