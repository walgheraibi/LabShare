var hello = function hello(name, callback) {
    callback(null, {message: "Hello " + name + "!"});
};

module.exports = hello;
