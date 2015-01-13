module.exports.newArray = function (a, b, c, d) {
    return [a, b, c, d];
};
module.exports.firstAndLast = function (array) {
    var newarray = [array[0],array.pop()];
    return newarray
};

//module.exports.newArray = [}
   // module.exports.newArray = [1, 2, 3, 4];
    //module.exports.newArray[0] = 1;
    //module.exports.newArray[1] = 2;
    //module.exports.newArray[2] = 3;
   // module.exports.newArray[3] = 4;
