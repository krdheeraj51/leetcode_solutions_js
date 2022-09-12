const { eraseOverlapIntervals } = require('../nonOverLapping')

test('Non-overlapping Intervals for [[1,2],[2,3],[3,4],[1,3]]', () => {
    let result = eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]);
    expect(result).toBe(1);
})