console.log("TypeScript");
function add(a, b) {
    // return a + b; //fixme invlaid
    if (typeof a === "string" || typeof b === "string") { //fix type guard
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(1, 5));
console.log(add("gfu", 5));
console.log(add("gfu", "gurr"));
var emp1 = {
    name: "Guru",
    privileges: ["create-server"],
    startDate: new Date(),
};
var emp2 = {
    name: "Guru",
    startDate: new Date(),
};
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    // if(typeof emp === "Admin") //fixme invalid
    if ("privileges" in emp)
        console.log("Privileges: " + emp.privileges);
    if ("startDate" in emp)
        console.log("Start Date: " + emp.startDate);
}
printEmployeeInformation(emp1);
printEmployeeInformation({ name: "Prasad", startDate: new Date() });
//todo type guards with classes
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving a car...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck...");
    };
    Truck.prototype.LoadCargo = function (amount) {
        console.log("Loading cargo..." + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.LoadCargo(2000);
    }
}
useVehicle(v2);
useVehicle(v1);
//todo type casting / type assertion
var userInp = document.getElementById("userInput"); //fix !=> not null assertion operator
userInp.value = "hello world";
var userInp2 = document.getElementById("userInput"); //fix type assertion
userInp2.value = "hello w";
