const prompt = require("prompt-sync")(); // Please don't touch me :)

//#region Variables

let firstNumber = Number(prompt("Please enter the first number: "));
let secondNumber = Number(prompt("Please enter the second number: "));
let operations = prompt("Please choose the operation (+, -, /, *): ");

//#endregion

//#region First Number Function

if(isNaN(firstNumber)) {
    console.log("Please input a valid number!")
} else {
    
}

//#endregion

//#region Second Number Function

if(isNaN(secondNumber)) {
    console.log("Please input a valid number!")
} else {
    
}

//#endregion

//#region Operation Functions

if(operations === "+" || operations === "-" || operations === "/" || operations === "*"){
    if(operations === "+") {
        console.log(`----------\n${firstNumber} + ${secondNumber} = `, firstNumber + secondNumber)
    } else if(operations === "-") {
        console.log(`----------\n${firstNumber} - ${secondNumber} = `, firstNumber - secondNumber)
    } else if(operations === "/") {
        console.log(`----------\n${firstNumber} / ${secondNumber} = `, firstNumber / secondNumber)
    } else if(operations === "*") {
        console.log(`----------\n${firstNumber} * ${secondNumber} = `, firstNumber * secondNumber)
    }
} else {
    console.log("Please input a valid operation!")
}

//#endregion