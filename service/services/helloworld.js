/*
*  Router file which defines the methods for /HelloWorld
*  This is file in which request validation would occur
*     Then call the appropriate method for that request
 */

var express = require('express');
var router = express.Router();

var helloworld = require('../lib/HelloWorld')(); 

//The routes for our api
//Use router.route to chain
router.route('/HelloWorld')
    .get(function(req, res) {
        helloworld.hello(function(err, data) {
            res.send(data);
        })
    })

    .post( function(req, res) {
        console.log("handling post");
        var name = req.body.name;

        //Validate request
        if(!name) {
            var error = new Error('Need to provide name');
            res.status(400);
            console.log(error);
            return res.send({error: error.message});
        }

        helloworld.helloUser(name, function (err, data) {
            res.json(data);
        });
    });

router.route('/HelloWorld/goodbye')
    .get(function(req, res) {
        helloworld.goodbye(function(err, data) {
            res.send(data);
        });
    });

module.exports = router;