//Todo Generics

// const fruits: string[] = ['apple', 'banana', 'orange'];
const fruits: Array<string> = ['apple', 'banana', 'orange'];

enum Gender { MALE, FEMALE };
type Person = {
    name: string;
    ph_no? : number;
    age: number;
    gender: Gender;
}
const boys : Array<Person> = [
    {name: 'John', age: 2, gender: Gender.FEMALE},
] 
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

function printValue<T>(a: T): void { //fix why T? --> in cpp T is Template classes and in ts this functions are consider as tempalte variables
    console.log(a);
}
printValue<string>("Hello World");
printValue(123); //fix ts infers the type automatically


//todo Generics contraints
function mergeWithConstrainst<T extends object, U extends object>(obj1: T, obj2: U) : T & U{
    return {...obj1, ...obj2};
}
console.log(mergeWithConstrainst({firstName: 'Guru'}, {sureName: "Prasad"}));

//Todo Generics  with interfaces
interface Box<T> {
    contents: T;
}
const box1: Box<string> = { contents: "Hello"};
const box2: Box<Number> = { contents: Number("Hello")};

//Todo Generics Default type
interface User<T = string> {
    data: T;
    status: boolean;
}
const user1: User = {data: "Guru", status: true}; // default type
const user2: User<object> = { data: {name: "Guru", age: 30}, status: true};

//Todo Generics with class

class DataHolder<T> {
    constructor(private data: T){
        this.data = data;
    }
    getData(): T {
        return this.data;
    }
}

const stringHolder = new DataHolder<string>("HEllO");
const numberHolder = new DataHolder(123); //fix ts automaticall also infer the type in class and functions
console.log(stringHolder.getData(), numberHolder.getData());


//Todo Generics with keyof

const Person = {key: "value"};
console.log(Person["key"]); // 'value'

// function getProperty(obj: object, key: string){
//     return obj[key]; //fixme invalid
// }
// const res1 = getProperty(Person, "key"); // valid
// const res2 = getProperty(Person, "Key1"); // invalid, but no error at compile time

function getProperty<T, K extends keyof T>(obj: T, key: K) : T[K]{
    return obj[key];
}

const res3 = getProperty(Person, "key"); //valid
// const res4 = getProperty(Person, "sdkjflkfd") //fixme inalid






