// console.log("lets learn object....");
// const person = {
//     firstName: "Guru",
//     age: 23
// }
// console.log(person.lastName);
// In javascript, it will undefined but in typescript it will give error
var person = {
    firstName: "Guru", // colon
    age: 23
};
console.log(person);
// nested obj
var person2 = {
    name: "Prasad",
    age: 24,
    xyz: {
        address: "Pune",
    }
};
console.log(person2);
// array
var person3 = {
    name: "Das",
    age: 24,
    skils: ["js", "ts", "react"]
};
console.log(person3);
var color;
color = ['red', 'green'];
var person4; //loose ts power
person4 = ['guru', 23, true];
// tuple // fixed array of the types
var person5;
person5 = ['guru', 24, true];
// enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
var person6 = {
    name: 'string',
    age: 5,
    role: Role.ADMIN
};
if (person6.role === Role.ADMIN)
    console.log("Admin");
else if (person6.role === Role.AUTHOR)
    console.log("Author");
else if (person6.role === Role.USER)
    console.log("User");
