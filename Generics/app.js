//Todo Generics
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// const fruits: string[] = ['apple', 'banana', 'orange'];
var fruits = ['apple', 'banana', 'orange'];
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender || (Gender = {}));
;
var boys = [
    { name: 'John', age: 2, gender: Gender.FEMALE },
];
console.log(boys);
// function merge (obj1: object, obj2: object){
//     return{...obj1, ...obj2};  
// }
// console.log(merge({firstName: 'Guru'}, {sureName: "Prasad"}));
//todo generic with functions
//fix humein ek function banana hai jo ki accept karega koi bhi value and usey print karega
// function printValue(a: any) : void{
//     // a. //fixme ts can't check the type of a
//     console.log(a);
// }
// printValue("Hello World");
// printValue(123);
//fix hum ek function ko use karte waqt bata skte hai ki function argument ko kis type se treat kare!
function printValue(a) {
    console.log(a);
}
printValue("Hello World");
printValue(123); //fix ts infers the type automatically
//todo Generics contraints
function mergeWithConstrainst(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
console.log(mergeWithConstrainst({ firstName: 'Guru' }, { sureName: "Prasad" }));
var box1 = { contents: "Hello" };
var box2 = { contents: Number("Hello") };
var user1 = { data: "Guru", status: true }; // default type
var user2 = { data: { name: "Guru", age: 30 }, status: true };
//Todo Generics with class
var DataHolder = /** @class */ (function () {
    function DataHolder(data) {
        this.data = data;
        this.data = data;
    }
    DataHolder.prototype.getData = function () {
        return this.data;
    };
    return DataHolder;
}());
var stringHolder = new DataHolder("HEllO");
var numberHolder = new DataHolder(123); //fix ts automaticall also infer the type in class and functions
console.log(stringHolder.getData(), numberHolder.getData());
//Todo Generics with keyof
var Person = { key: "value" };
console.log(Person["key"]); // 'value'
// function getProperty(obj: object, key: string){
//     return obj[key]; //fixme invalid
// }
// const res1 = getProperty(Person, "key"); // valid
// const res2 = getProperty(Person, "Key1"); // invalid, but no error at compile time
function getProperty(obj, key) {
    return obj[key];
}
var res3 = getProperty(Person, "key"); //valid
// const res4 = getProperty(Person, "sdkjflkfd") //fixme inalid
