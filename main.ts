#!-/usr/bin/env-node

import { log } from "console";
import inquirer from "inquirer";

let myBalance: number = 10000;

let myPin: number = 9999;

let pinAnswer = await inquirer.prompt([
    {
    type: "number",
    name: "Pin",
    message: "Enter your pin?"
}
]);

if (pinAnswer.Pin === myPin)
{
console.log("Correct pin code")
}
else {
    console.log("Incorrect pin code")
    };    

let operaionAns = await inquirer.prompt([{
    type: "list",
    name: "operation",
    message: "Please select option",
    choices: ["withdraw", "Check balance"]
}
]) ;
console.log(operaionAns);


if (operaionAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            type: "list",
            choices: ["1000", "5000", "7000", "10000", "Enter amount to draw"],
            name: "amount",
            message: "Enter amount to withdraw"
        }
    ]);

    myBalance -= amountAns.amount;
    console.log("Your remaining balance: " + myBalance);

} else if (operaionAns.operation === "Check balance") {
    console.log("Your balance is " + myBalance);
}
  



// else{
//     console.log("Incorrect pin number")
// } 

