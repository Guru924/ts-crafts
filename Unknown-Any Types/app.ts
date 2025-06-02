let userInput: unknown;
let sureName : any;
let userName: string;

userInput = 5;
userName = "Guru";
sureName = userName;

//userName = userInput; //fixme Invalid, userInput isunknown type
if(typeof userInput === "string"){
    userInput = userName;
}