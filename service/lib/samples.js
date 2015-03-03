/**
 * Created by weaamalgheraibi on 3/3/15.
 */

var fs = require('fs'),
    _ = require('underscore'),
    path = require('path');
var samplesObj ;
var samples = function samples() {
    function getsamples(callback) {
        var samplesFile = path.join(__dirname, '/Samples/sample.json');
        fs.exists(samplesFile, function (exists) {
            if (exists) {
                fs.readFile(samplesFile, 'utf8', function (err, data) {
                    if (err) throw err;
                    samplesObj = JSON.parse(data);
                    return callback(null, samplesObj);
                });

            }

            else {
                createsamplesFile(samplesFile, function __createCallback(err, data) {
                    if (err) {
                        var error = new Error("Samples file not found " + err.message);
                        return callback(error, null)
                    }
                    else {
                        return callback(null, "")
                    }
                });
            }
        })
    }

    return {
        getsamples: getsamples

    }




}
module.exports = samples;