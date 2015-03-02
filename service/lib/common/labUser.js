var labUser = {};
function LabUser(user) {
    if(user.userName) {
        labUser.userName = user.userName;
    }
    if(user.firstName) {
        labUser.firstName = user.firstName;
    }
    if(user.lastName) {
        labUser.lastName = user.lastName;
    }
    return labUser;
};

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = LabUser;
    }
    exports.LabUser = LabUser;
} else {
    this.LabUser = LabUser;
}
