function add(a, b) {
    return a + b;
} 

function subtract(a, b) { 
    return a - b;
}

function multiply(a, b) {
    return a * b;
} 

function divide(a, b) { 
    return a / b;
}

function quinaryToDecimal(quinary) {
    return parseInt(quinary, 5);
}

function decimalToQuinary(decimal) {
    if (decimal === 0) return "0";
    let quinary = "";
    let quotient = decimal;
    while (quotient > 0) {
        quinary = (quotient % 5).toString() + quinary;
        quotient = Math.floor(quotient / 5);
  }
  return quinary;
}


module.exports = {
    add,
    subtract,
    multiply,
    divide,
    quinaryToDecimal,
    decimalToQuinary
}