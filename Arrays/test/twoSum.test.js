const { twoSum } = require('../twoSum');

test("match sum with target value in geiven array [2,7,11,15] where target is 9", () => {
    let result = twoSum([2, 7, 11, 15], 9);
    expect(result.sort()).toEqual([1, 0].sort())
})