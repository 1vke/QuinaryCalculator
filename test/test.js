const { add, subtract, multiply, divide, quinaryToDecimal, decimalToQuinary } = require('../src/js/calculator');
const assert = require('assert');

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

describe('quinaryToDecimal', function() {
    it('should convert "10" to 5', function() {
        assert.equal(quinaryToDecimal("10"), 5);
    });
    it('should convert "0" to 0', function() {
        assert.equal(quinaryToDecimal("0"), 0);
    });
});


describe('decimalToQuinary', function() {
    it('should convert 6 to 11', function() {
        assert.equal(decimalToQuinary(6), "11");
    });
    it('should convert 0 to 0', function() {
        assert.equal(decimalToQuinary(10), "20");
    });    
});