/**
 * 435. Non-overlapping Intervals
 * 
 * Given an array of intervals intervals where 
 * intervals[i] = [starti, endi], return the minimum number of intervals you 
 * need to remove to make the rest of the intervals non-overlapping.

 

Example 1:

Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
Example 2:

Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
Example 3:

Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already 
non-overlapping.
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    if (intervals.length === 0) return 0;
    let count = 0;
    intervals.sort(function (a, b) { return a[0] - b[0] });
    let end = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i];
        const intervalStart = interval[0];
        const intervalEnd = interval[1];
        if (intervalStart < end) {
            count++;
            end = Math.min(intervalEnd, end);
        } else {
            end = intervalEnd;
        }
    }
    return count;


};

module.exports = {
    eraseOverlapIntervals
}