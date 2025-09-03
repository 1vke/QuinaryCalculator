export function add(a, b) {
    return a + b;
} 

export function subtract(a, b) { 
    return a - b;
}

export function multiply(a, b) {
    return a * b;
} 

export function divide(a, b) { 
    return a / b;
}

export function sqrt(a) {
    return Math.sqrt(a);
}

export function square(a) {
    return a*a;
}

export function quinaryToDecimal(quinary) {
    place = 1;
    if (quinary < 0 ){ place = -1;
} return place * parseInt(quinary, 5);
}

export function decimalToQuinary(decimal) {
    place = 1;
    if (decimal === 0) return "0";
    if (decimal < 0){ place = -1;}
    let quinary = "";
    let quotient = decimal;
    while (quotient > 0) {
        quinary = (quotient % 5).toString() + quinary;
        quotient = Math.floor(quotient / 5);
  }
  return place * quinary;
}
