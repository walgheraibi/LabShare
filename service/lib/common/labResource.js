var labResource = {};
function LabResource(resource) {
    if(resource.name) {
        labResource.name = resource.name;
    }
    return labResource;
};

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = LabResource;
    }
    exports.LabResource = LabResource;
} else {
    this.LabResource = LabResource;
}
