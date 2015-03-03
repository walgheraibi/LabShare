/**
 * Created by weaamalgheraibi on 3/3/15.
 */

var sampleLibrary = require('./../lib/samples');
var samples = function samples(){
    function getsamples(request, response){
        var sampleLib = new sampleLibrary();
        sampleLib.getsamples(function __getCallback(error, samples){
            if(error){
                response.status(400);
                response.json({error:error.message});
            }
            else {
                response.json({samples: samples});
            }
        });
    }
    return {
        getsamples: getsamples

    }
}
module.exports = samples;