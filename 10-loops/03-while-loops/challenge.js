module.exports.stream = function(conditionalFn, actionFn) {
    conditionalFn = function() {
        return false;
    };
    actionFn = function() {
        throw new Error("actionFn shouldn't have been called");
    };
    var flag = true;
    var array = [];
    conditionalFn = function () {
        var oldFlag = flag;
        flag = !flag;
        return oldFlag;
    };
    actionFn = function() {
        array.push('1');
    };
    var counter = 10;
    var array2 = [];
    conditionalFn = function() {
        counter--;
        return counter >= 0;
    };
    actionFn = function() {
        array2.push('1');
    };
};

module.exports.sumNumbers = function(numbers){
    var counter = 0;
    for (var i=0; i < numbers.length; i++) {
        counter += numbers[i];
    }
    return counter;
};

