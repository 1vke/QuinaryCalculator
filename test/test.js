import { add, subtract, multiply, divide, sqrt, square, quinaryToDecimal, decimalToQuinary } from '../src/js/calculator.js';
import assert from 'assert';

describe('Example add test case', function() {
    it('add correctly', function() {
        assert.strictEqual(add(1, 2), 3);
    });
});

describe('Example subtract test case', function() {
    it('subtract correctly', function() {
        assert.strictEqual(subtract(1, 2), -1);
    });
});

describe('Example multiply test case', function() {
    it('multiply correctly', function() {
        assert.strictEqual(multiply(1, 2), 2);
    });
});

describe('Example divide test case', function() {
    it('divide correctly', function() {
        assert.strictEqual(divide(1, 2), .5);
    });
});

describe('sqrt', function() {
    it('should return 10 for 100 input', function() {
        assert.equal(sqrt(100), 10);
    });
    it('should return 5 for 25 input', function() {
        assert.equal(sqrt(25), 5);
    });
});

describe('square', function() {
    it('should return 100 for 10 input', function() {
        assert.equal(square(10), 100);
    });
    it('should return 0 for 0 input', function() {
        assert.equal(square(0), 0);
    });
});

describe('quinaryToDecimal', function() {
    it('should convert "10" to 5', function() {
        assert.equal(quinaryToDecimal(10), 5);
    });
    it('should convert "0" to 0', function() {
        assert.equal(quinaryToDecimal(0), 0);
    });
});


describe('decimalToQuinary', function() {
    it('should convert 6 to 11', function() {
        assert.equal(decimalToQuinary(6), 11);
    });
    it('should convert 0 to 0', function() {
        assert.equal(decimalToQuinary(10), 20);
    });    
});

describe('quinaryToDecimal', function() {
    it('should convert "-10" to -5', function() {
        assert.equal(quinaryToDecimal(-10), -5);
    });
    it('should convert "0" to 0', function() {
        assert.equal(quinaryToDecimal(0), 0);
    });
});


describe('decimalToQuinary', function() {
    it('should convert -6 to -11', function() {
        assert.equal(decimalToQuinary(-6), -11);
    });
    it('should convert 0 to 0', function() {
        assert.equal(decimalToQuinary(-10), -20);
    });    
});

