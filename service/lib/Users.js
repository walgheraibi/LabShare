var fs = require('fs'),
    _ = require('underscore'),
    path = require('path'),
    labUser = require('./common/labUser');
var usersObj;
function Users(){

    function getUsers(callback){
        var usersFile = path.join(__dirname, '/common/users.json');
        fs.exists(usersFile, function(exists) {
            if (exists) {
                fs.readFile(usersFile, 'utf8', function (err, data) {
                    if (err) throw err;
                    usersObj = JSON.parse(data);
                    _.each(usersObj, function (user) {
                        labUser(user);
                    });
                    return callback(null, usersObj);
                });
            }
            else {
                createUsersFile(usersFile, function __createCallback(err, data) {
                    if (err) {
                        var error = new Error("User database not found " + err.message);
                        return callback(error, null)
                    }
                    else {
                        return callback(null, "")
                    }
                });
            }
        });
    }

    function createUsersFile(filePath, callback){
        var usersFile = fs.createWriteStream(filePath);
        usersFile.on('error', function(err){
            return callback(err, null);
        });
        usersFile.write("[]");
        usersFile.end();
        return callback(null, filePath);
    }

    function findUser(users, userName, callback){
        var user = _.findWhere(users, {"userName":userName});
        if(user){
            return callback(user);
        }
        else{
            return callback(null)
        }
    }

    function getUser(id, callback){

    }

    function generateUniqueId(users, callback){
        if(users && users.length >= 1){
            _.max(users, function (user) {
                if (user) {
                    return callback(user.id + 1);
                }
                else {
                    return callback(1);
                }
            });
        }
        else {
            return callback(1);
        }
    }

    function addUser(user, callback){
        var filePath = path.join(__dirname, '/common/users.json');

        getUsers(function __getCallback(err, users){
            if(!err) {

                findUser(users, user.userName, function _findCallback(data) {
                    generateUniqueId(users, function idCallback(id) {
                        user.id = id;
                        if (!data) {
                            users.push(user);
                            var usersFile = fs.createWriteStream(filePath);
                            usersFile.on('error', function (err) {
                                return callback(err, null);
                            });
                            usersFile.on('open', function () {
                                usersFile.write(JSON.stringify(users));
                                usersFile.end();
                            });
                            usersFile.on('close', function () {
                                return callback(null, users.length)
                            });

                        }
                        else {
                            var error = new Error("User already exists");
                            return callback(error, null);
                        }
                    });
                });
            }
        });
    }

    function deleteUser(id, callback){

    }
    return {
        getUsers: getUsers,
        getUser: getUser,
        addUser: addUser,
        deleteUser: deleteUser
    }
}

module.exports = Users;