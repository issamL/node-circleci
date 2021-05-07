const sum = require('./sketch');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2,1)).toBe(3);
});