// Prompt the user to enter a number
let input = prompt("Enter a number:");

// Convert the input to a number
let number = Number(input);

// Check if the input is a valid number
if (isNaN(number)) {
    console.log("Please enter a valid number.");
} else {
    // Check if the number is a multiple of 5
    if (number % 5 === 0) {
        console.log(`${number} is a multiple of 5.`);
    } else {
        console.log(`${number} is not a multiple of 5.`);
    }
}



function calculator(num1, num2, operator) {
    let result;

    // Using switch statement to determine the operation
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // Check for division by zero
            if (num2 === 0) {
                return "Error: Division by zero is not allowed.";
            }
            result = num1 / num2;
            break;
        default:
            return "Error: Invalid operator. Please use +, -, *, or /.";
    }

    return result;
}

// Example usage:
console.log(calculator(10, 5, '+')); // returns 15
console.log(calculator(10, 5, '-')); // returns 5
console.log(calculator(10, 5, '*')); // returns 50
console.log(calculator(10, 5, '/')); // returns 2






