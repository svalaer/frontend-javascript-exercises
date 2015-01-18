module.exports.sumNumbers = function(numbers) {
    var counter = 0;
    for (var i=0; i < numbers.length; i++) {
        counter += numbers[i];
    }
    return counter;
};

module.exports.splitAndLowerCaseString = function(inputString) {
    var splitString = inputString.split(",");
    for (var i = 0; i < splitString.length; i++) {
        var obj = splitString[i];
        splitString[i] = obj.toLowerCase();
    }
    return splitString;
};

module.exports.addIndex = function(inputs) {
    var newStrings = [];
    for (var i = 0; i < inputs.length; i++) {
        var obj = inputs[i];
        newStrings.push(i + " is " + obj);
    }

    return newStrings;
}

