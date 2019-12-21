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

        console.log(userFacts);
        res.header('Access-Control-Allow-Origin', frontEndUrl);
        res.send({ack: "ok"});
        //TODO: check for errors

        // // Header for avoiding cors block from my front end
        // res.header('Access-Control-Allow-Origin', frontEndUrl);
        
        // //Respond back with the data
        // res.send(req.body);
        
    }
);

//GET
router.get('/', function(req, res){
    let facts = { all: userFacts };
    res.send(facts);
});



module.exports = router;