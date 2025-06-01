// js is dynamically typed language
// basic js program
// function add(num1, num2){
//     if(typeof n1 === 'number' && typeof n2 === 'number')
//     return num1 + num2;
//     else return +num1 + num2;
// }
// const n1 = '20'; // if we send a string
// const n2 = 30;
// const ans = add(n1, n2);
// console.log(ans);
// but in typescript we can specify the types
function add(num1, num2, printResult, someText) {
    if (printResult)
        console.log(someText + (num1 + num2));
    else
        return num1 + num2;
}
var n1 = 20; // number
var n2 = 30;
var printResult = true;
var someText = "Sum of two number is ";
var ans = add(n1, n2, printResult, someText);
