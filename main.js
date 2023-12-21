import inquirer from "inquirer";
let result = await inquirer.prompt([
    {
        type: 'number',
        name: 'num1',
        message: "Enter the first number"
    },
    {
        type: 'number',
        name: 'num2',
        message: "Enter the second number"
    },
    {
        type: 'list',
        name: 'operator',
        message: 'Select the operator',
        choices: ["add", "subtract", "multiply", "divide"]
    }
]);
let response;
switch (result.operator) {
    case "add":
        response = result.num1 + result.num2;
        console.log(response);
        break;
    case "subtract":
        response = result.num1 - result.num2;
        console.log(response);
        break;
    case "multiply":
        response = result.num1 * result.num2;
        console.log(response);
        break;
    case "divide":
        response = result.num1 / result.num2;
        console.log(response);
        break;
}
