//todo example UNION

// function combine(num1: number, num2: number){
//     return num1 + num2;
// }
// combine(10, 20); // 30
// combine("Guru", "924"); //Guru924

// function combine(num1: number | string, num2: number | string){
//     let result;
//     if(typeof num1 === 'number' && typeof num2 === 'number') result = num1 + num2;
//     else result = num1.toString() + num2.toString();
//     return result;
// }
// const sum = combine(10, 20); // 30
// const userName = combine("Guru", "924"); //Guru924
// console.log(sum, userName)

//todo example LITERAL Types
//fixme combineLiteral(num1: number | string, num2: number | string)
function combineLiteral(num1, num2, conversionType: "as-number" | "as-string"){
    let result;
    if(conversionType === 'as-number') result = num1 + num2;
    else result = num1.toString() + num2.toString();
    return result;
}
const sum = combineLiteral(10, 20, "as-number"); // 30
const userName = combineLiteral("Guru", "924", "as-string"); //Guru924
console.log(sum, userName)

//todo example Type Aligses

type combineType = number | string;
type ConversionType = "as-number" | "as-string";

function combine(num1: combineType, num2: combineType, conversionType: ConversionType){
    let result;
    if(typeof num1 === 'number' && typeof num2 === 'number'|| conversionType === "as-number") result = +num1 + +num2;
    else result = num1.toString() + num2.toString();
    return result;
}

const sum1 = combineLiteral(10, 20, "as-number"); // 30
const userName1 = combineLiteral("Guru", "924", "as-string"); //Guru924

console.log(sum1, userName1)


// const user : {
//     name: string;
//     age: number;
// }  = {
//     name: "Guru",
//     age: 24,
// }

type User = {
    name: string;
    age: number;
}
const user : User  = {
    name: "Guru",
    age: 24,
}

function greet(user: User){
    console.log("hello" + user.name + ", your age is "+ user.age)
}