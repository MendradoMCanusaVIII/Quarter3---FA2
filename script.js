function calculate(operator) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result;
    let message;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        return;
    }

    switch (operator) {
        case '+':
            result = num1 + num2;
            message = `The sum is ` + result;
            break;
        case '-':
            result = num1 - num2;
            message = `The difference is ` + result;
            break;
        case '*':
            result = num1 * num2;
            message = `The product is ` + result;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            message = `The quotient is ` + result;
            break;
        case '%':
            result = num2 !== 0 ? num1 % num2 : "Cannot divide by zero";
            message = `The remainder is ` + result;
            break;
    }

    document.getElementById('result').innerText = message;
}