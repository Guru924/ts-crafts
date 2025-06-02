//todo example interface

// interface Person {
//     name: string;
//     age: number;
//     greet(txt: string): void;
// }

// let user: Person;

// user = {
//     name: "Guru",
//     age: 30,
//     greet(txt: string) {
//         console.log("Hello " + name)
//     }
// }


interface greetable {
    name: string;
    greet(txt: string): void;
}
class Person implements greetable {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet(txt: string): void {
        console.log("Hello " + this.name + ", ", txt);
    }
}

const user = new Person("Guru");
user.greet("Welcome to TypeScript interfaces!");

// optional ?

interface Named {
    readonly name: string;
    surname ?: string;
}
class User1 implements Named {
    readonly name: string;
    constructor(name: string){
        this.name = name;
    }
}