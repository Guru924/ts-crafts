//todo example of a function return type
function add(num1: number, num2: number) : number {
    return num1 + num2;
}
const result = add(5,10);
console.log(result);

function greet(name: string) : void {
    console.log("Hello", name);
}

// let combineFunctions : Function;
// combineFunctions = 10; //fixme Invalid
// combineFunctions = function(){} 

let combineFunctions: (num1: number, num2: number) => number
combineFunctions = add;

console.log(combineFunctions(100, 200))

//todo example of functions type and callback
function addHandler(num1: number, num2: number, cb: ( result:  number) => void) : void{
    const result = num1 + num2;
    cb(result);
}

addHandler(10, 20, (result : number) => {
    console.log("The result is", result);
})

//todo example of never return type
function throwError(message: string, code: number) : never {
    throw {message: message, errorcode: code};
}
throwError("Internal Error",  500)