#!/usr/bin/env node

import inquirer from "inquirer"; 



    let answer = await inquirer.prompt([
        {
    type: "number",
    name: "num1",
    message: "Enter the first number",
    
},
{
    type: "number",
    name: "num2",
    message: "Enter the second number",  
},
{
    type: "list",
    name: "operation",
    message: "What would you like to do with the numbers?",
    choices: ["add", "subtract", "multiply","divide"]
}
]);

let result: number;

if (answer.operation==="add"){
    result = answer.num1 + answer.num2;
    console.log(result);
}
else if (answer.operation=== "subtract"){
    result = answer.num1 - answer.num2;
    console.log(result);
}
else if (answer.operation=== "multiply"){
    result = answer.num1 * answer.num2;
    console.log(result);
}
else if (answer.operation=== "divide"){
    result = answer.num1 / answer.num2;
    console.log(result);
}


