module.exports.reversePlusOne = function(reversePlusOne) {
    var newvar = [reversePlusOne.reverse(), reversePlusOne.unshift(1)];
    return newvar;
};

module.exports.plusesEverywhere = function(plusesEverywhere){
    return plusesEverywhere.join("+");
};


module.exports.arrayQuantityPlusOne = function(arrayQuantityPlusOne){
    return arrayQuantityPlusOne.length + 1;
}