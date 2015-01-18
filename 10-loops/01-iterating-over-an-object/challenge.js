module.exports.getKeys = function(thatObject) {
    return Object.keys(thatObject);
};

module.exports.getValues = function(thoseValues) {
     var values = [];
    for (var i in thoseValues) {
        values.push(thoseValues[i]);
    }
    return values;
};

module.exports.objectToArray = function (inputs) {
    var newStrings = [];
    for (var prop in inputs) {
        newStrings.push(prop + " is " + inputs[prop]);
    }
    return newStrings;
};