console.log("TypeScript");
//todo Type Guards

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; //fix & => intersection and | => union

function add(a: Combinable, b: Combinable) {
    // return a + b; //fixme invlaid
    if (typeof a === "string" || typeof b === "string") { //fix type guard
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(1, 5));
console.log(add("gfu", 5));
console.log(add("gfu", "gurr"));

type Admin = {
    name: string;
    privileges: string[];
}
type Employee = {
    name: string;
    startDate: Date; //fix Date => new Date()
}

type ElevatedEmployee = Admin & Employee;

type UnknownEmployee = Admin | Employee;

const emp1: ElevatedEmployee = {
    name: "Guru",
    privileges: ["create-server"],
    startDate: new Date(),
}

const emp2: UnknownEmployee = {
    name: "Guru",
    startDate: new Date(),
}

function printEmployeeInformation(emp: UnknownEmployee): void {
    console.log("Name: " + emp.name);
    // if(typeof emp === "Admin") //fixme invalid
    if ("privileges" in emp) console.log("Privileges: " + emp.privileges);
    if ("startDate" in emp) console.log("Start Date: " + emp.startDate);
}

printEmployeeInformation(emp1)
printEmployeeInformation({name: "Prasad", startDate: new Date()})

//todo type guards with classes

class Car{
    drive(){
        console.log("Driving a car...");
    }
}
class Truck{
    drive(){
        console.log("Driving a truck...");
    }
    LoadCargo(amount: number){
        console.log("Loading cargo..." + amount);
    }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck){
        vehicle.LoadCargo(2000);
    }
}

useVehicle(v2);
useVehicle(v1);

//todo type casting / type assertion

const userInp = document.getElementById("userInput")! as HTMLInputElement; //fix !=> not null assertion operator
userInp.value = "hello world"

const userInp2 = <HTMLInputElement>document.getElementById("userInput")!; //fix type assertion
userInp2.value = "hello w"