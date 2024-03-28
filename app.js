import inquirer from "inquirer";
let balanceWithdrawLimit = 100000;
let myBalance = 500000;
let mypin = 1234;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "Enter your pin number: "
});
if (pinAnswer.pin === mypin) {
    console.log("Correct pin code !!!");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Please select option",
        choices: ["withdraw", "check balance"]
    }
]);
console.log(operationAns);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your amount",
            type: "list",
            choices: ["1000", "2000", "5000", "10000", "20000", "100000", "500000"]
        }
    ]);
    if (amountAns.amount === balanceWithdrawLimit) {
        console.log("Out of your limit");
    }
    else if (amountAns.amount >= balanceWithdrawLimit) {
        console.log("Insufficient Balance");
    }
    else {
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is: " + myBalance);
    }
}
else if (operationAns.operation === "check balance") {
    console.log("Your balance is: " + myBalance);
}
else {
    console.log("Incorrect pin number");
}
;
