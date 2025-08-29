var main = require('../index');
var assert = require('assert');

describe('Example test case', function() {
    it('add correctly', function() {
        assert.strictEqual(main.add(1, 2), 3);
    });
    it('add incorrectly', function() {
        assert.notStrictEqual(main.add(1, 2), 4);
    });
});
