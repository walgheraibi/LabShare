var userLibrary = require('./../lib/Users');
function Users(){

    function getUsers(request, response){
        var userLib = new userLibrary();
        userLib.getUsers(function __getCallback(error, users){
            if(error){
                response.status(400);
                response.json({error:error.message});
            }
            else {
                response.json({labUsers: users});
            }
        });
    }

    function getUser(request, response){
        response.send(501);
    }

    function addUser(request, response){
        var user = request.body;
        var userLib = new userLibrary();
        userLib.addUser(user, function __addCallback(error, id){
            if(error){
                response.status(400);
                response.json({error:error.message});
                return;
            }
            else {
                response.json({id: id});
                return;
            }
        });
    }

    function deleteUser(request, response){
        response.send(501);
    }
    return {
        getUsers: getUsers,
        getUser: getUser,
        addUser: addUser,
        deleteUser: deleteUser
    }
}

module.exports = Users;