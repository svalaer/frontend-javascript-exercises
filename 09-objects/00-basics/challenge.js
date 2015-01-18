module.exports.createCourse = function (title, duration, students){
    var course = {
        title: title,
        duration: duration,
        students: students
    };
    return course;
};

module.exports.addProperty = function (object,newProp,newValue){
    if (!object[newProp]) {
        object[newProp] = newValue;
    }
    return object;
}

module.exports.formLetter = function (letter){
    var messageStr = "Hello" + " " + letter.recipient + ",\n\n" + letter.msg + "\n\n\Sincerely,\n" + letter.sender;
    return messageStr;
};

module.exports.canIGet = function(item, money) {
    var products = {
        'MacBook Air': 999,
        'MacBook Pro': 1299,
        'Mac Pro': 2499,
        'Apple Sticker': 1
    };
    return products[item] <= money;
};