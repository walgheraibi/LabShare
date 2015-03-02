/*
*  The business logic for HelloWorld
 */
function helloworld() {
    function hello(callback) {
        callback(null, "Hello");
    };

    function helloUser(name, callback) {
        callback(null, {message: "Hello " + name + "!"});
    };

    function goodbye(callback) {
        callback(null, "Goodbye cruel world.");
    }

    return {
        hello: hello,
        helloUser: helloUser,
        goodbye: goodbye
    };
}
module.exports = helloworld;
