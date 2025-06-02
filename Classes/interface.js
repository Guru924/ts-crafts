"use strict";
//todo example interface
class Person {
    constructor(name) {
        this.name = name;
    }
    greet(txt) {
        console.log("Hello " + this.name + ", ", txt);
    }
}
const user = new Person("Guru");
user.greet("Welcome to TypeScript interfaces!");
class User1 {
    constructor(name) {
        this.name = name;
    }
}
