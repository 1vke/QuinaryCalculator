import { add, subtract, multiply, divide, sqrt, square, quinaryToDecimal, decimalToQuinary } from './calculator.js';
const displayInputElement = document.querySelector("#display");

let currentNumberQuinary = "";
let storedNumberDecimal = null;
let operation = null;
let isNewNumber = true;

let quinaryDisplayMode = true;

function updateDisplay() {
    let displayValue = "";

    if (quinaryDisplayMode) {
        displayValue = currentNumberQuinary;
    } else if (currentNumberQuinary.length !== 0) {
        const decimalValue = quinaryToDecimal(currentNumberQuinary);
        displayValue = decimalValue.toString();
    }
    
    displayInputElement.value = displayValue;
}

function calculate(num1, num2, op) {
    switch (op) {
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
        default: return num2;
    }
}

function handleNumber(digit) {
    if (["0", "1", "2", "3", "4"].includes(digit)) {
        if (isNewNumber) {
            currentNumberQuinary = digit;
            isNewNumber = false;
        } else {
            currentNumberQuinary += digit;
        }
    }

    updateDisplay();
}

function handleOperation(nextOperation) {
    const decimalCurrentNumber = quinaryToDecimal(currentNumberQuinary);

    if (storedNumberDecimal === null) {
        storedNumberDecimal = decimalCurrentNumber;
    } else {
        storedNumberDecimal = calculate(storedNumberDecimal, decimalCurrentNumber, operation);
    }

    currentNumberQuinary = decimalToQuinary(storedNumberDecimal);
    isNewNumber = true;
    operation = nextOperation;

    updateDisplay();
}

function handleSpecialOperation(op) {
    const decimalCurrentNumber = quinaryToDecimal(currentNumberQuinary);

    let result;
    if (op === 'sqrt') {
        result = sqrt(decimalCurrentNumber);
    } else if (op === 'square') {
        result = square(decimalCurrentNumber);
    }

    currentNumberQuinary = decimalToQuinary(result);
    isNewNumber = true;

    updateDisplay();
}

function handleEquals() {
    if (operation !== null && storedNumberDecimal !== null) {
        const decimalCurrentNumber = quinaryToDecimal(currentNumberQuinary);
        const result = calculate(storedNumberDecimal, decimalCurrentNumber, operation);

        currentNumberQuinary = decimalToQuinary(result);
        operation = null;
        storedNumberDecimal = null;
        isNewNumber = true;
        
        updateDisplay();
    }
}

function handleClear() {
    currentNumberQuinary = "";
    storedNumberDecimal = null;
    operation = null;
    isNewNumber = true;

    updateDisplay();
}

function toggleBase() {
    quinaryDisplayMode = !quinaryDisplayMode;

    updateDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
    const clearButton = document.querySelector('.clear-button');
    const addButton = document.querySelector('.add-button');
    const subtractButton = document.querySelector('.subtract-button');
    const multiplyButton = document.querySelector('.multiply-button');
    const divideButton = document.querySelector('.divide-button');
    const sqrtButton = document.querySelector('.sqrt-button');
    const squareButton = document.querySelector('.square-button');
    const equalButton = document.querySelector('.equal-button');
    const numberButtons = document.querySelectorAll('.number-button');
    const toggleBaseButton = document.querySelector('.toggle-base-button');

    clearButton.onclick = handleClear;
    addButton.onclick = () => handleOperation('+');
    subtractButton.onclick = () => handleOperation('-');
    multiplyButton.onclick = () => handleOperation('*');
    divideButton.onclick = () => handleOperation('/');
    sqrtButton.onclick = () => handleSpecialOperation('sqrt');
    squareButton.onclick = () => handleSpecialOperation('square');
    equalButton.onclick = handleEquals;
    toggleBaseButton.onclick = toggleBase;

    numberButtons.forEach(button => {
        button.onclick = () => {
            const digit = button.textContent;
            handleNumber(digit);
        };
    });

    updateDisplay();
});
