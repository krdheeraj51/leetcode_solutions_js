const { containsDuplicate } = require('../duplicatesCheck');
test('Array contains duplicate or not', () => {
    const isDuplicate = containsDuplicate([1, 2, 3, 4, 1, 5, 2])
    expect(isDuplicate).toBe(true)

})
