//todo example of a function return type
function add(num1, num2) {
    return num1 + num2;
}
var result = add(5, 10);
console.log(result);
function greet(name) {
    console.log("Hello", name);
}
// let combineFunctions : Function;
// combineFunctions = 10; //fixme Invalid
// combineFunctions = function(){} 
var combineFunctions;
combineFunctions = add;
console.log(combineFunctions(100, 200));
//todo example of functions type and callback
function addHandler(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandler(10, 20, function (result) {
    console.log("The result is", result);
});
//todo example of never return type
function throwError(message, code) {
    throw { message: message, errorcode: code };
}
throwError("Internal Error", 500);
