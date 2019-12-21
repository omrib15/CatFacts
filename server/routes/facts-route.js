const express = require('express');
const router = express.Router();
const https = require('https');

const catFactsUrl = 'https://cat-fact.herokuapp.com/facts';
const frontEndUrl = 'http://localhost:4200';

//get all facts
router.get('/', function(req, res, next)
    {
	    https.get(catFactsUrl, (resp) => {
            let data = '';
        
            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });
        
            // The whole response has been received. send the response with the cats data
            resp.on('end', () => {
        
                //Header for avoiding cors block from my front end
                res.header('Access-Control-Allow-Origin', frontEndUrl);
        
                //Respond back with the data
                res.send(JSON.parse(data));
            });
        
            }).on("error", (err) => {
                console.log("Error: " + err.message);
            });
    });

module.exports = router;