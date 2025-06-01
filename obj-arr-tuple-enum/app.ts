// console.log("lets learn object....");

// const person = {
//     firstName: "Guru",
//     age: 23
// }
// console.log(person.lastName);
// In javascript, it will undefined but in typescript it will give error

const person: {
    firstName: string;
    age: number; // semicolon
} = {
    firstName: "Guru", // colon
    age: 23
}
console.log(person);

// nested obj

const person2: {
    name: string;
    age: number;
    xyz: {
        address: string;
    }
} = {
    name: "Prasad",
    age: 24,
    xyz: {
        address: "Pune",
    }
}
console.log(person2);

let firstName: string = "Guru";
const person2a: object = {
    firstName: firstName,
}
// console.log(person2a.firstName); // will give error, as object may be empty, object doesn't know firstname

// array
const person3: {
    name: string;
    age: number;
    skils: string[];
} = {
    name: "Das",
    age: 24,
    skils: ["js", "ts", "react"]
}
console.log(person3);

let color: string[];
color = ['red', 'green'];

let person4: any[] //loose ts power
person4 = ['guru', 23, true];

// tuple // fixed array of the types
let person5: [string, number, boolean];
person5 = ['guru', 24, true];


// enum
enum Role { ADMIN, AUTHOR, USER }
const person6 = {
    name: 'string',
    age: 5,
    role: Role.ADMIN
}

if (person6.role === Role.ADMIN) console.log("Admin")
else if (person6.role === Role.AUTHOR) console.log("Author")
else if (person6.role === Role.USER) console.log("User")