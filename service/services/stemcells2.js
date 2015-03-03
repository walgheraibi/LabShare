/**
 * Created by weaamalgheraibi on 2/24/15.
 */
/*
var cells = require('../lib/stemcells1');

var stemcells1 = function stemcells1() {


    console.log("creating new stem cell service");
    this.get = function (req, res) {

        console.log("handling post");
        console.log("reg body: " + req.body);
        var name = req.body.name;

        getstem(name, function (err, data) {
            res.json(data);
        });
    }
};

module.exports = stemcells1;
*/


//var stemcellServices = angular.module('stemcellServices', ['ngResource']);

var stemcellServices = function stemcellServices() {
    stemcellServices.factory(function ($http) {
        var obj = {content: null};
        $http.get('sample/sample.json').success(function (data) {
            obj.content = data;

        });
        return obj;
    });
};
module.exports = stemcellServices;