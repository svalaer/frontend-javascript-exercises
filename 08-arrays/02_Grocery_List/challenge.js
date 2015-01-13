module.exports.addItem = function(itemToAdd, array) {
    var location = array.indexOf(itemToAdd);
    if (location < 0) {
        array.push(itemToAdd);
    };
    return array;
}

module.exports.reverseSortedList = function(array) {
    array.sort();
    array.reverse();
    return array
}