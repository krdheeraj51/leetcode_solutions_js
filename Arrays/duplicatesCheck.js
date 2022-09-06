/**
 * 217. Contains Duplicate
 * 
 * Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
let nums = [1, 2, 3, 1];
/**
 * var containsDuplicate = function (nums) {
    let getFilteredArray = nums.filter((num, index) => {
        return nums.indexOf(num) === index;

    });

    return getFilteredArray.length !== nums.length;
    

};
*/
/**
 * Second Approach 
 * ------------------------
 */
 var containsDuplicate = function (nums) {
    var visitedNums = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (visitedNums[num]) {
            return true;
        } else {
            visitedNums[num] = true;
        }
    }
    return false;
}

module.exports={
    containsDuplicate
}

// console.log(":::: ", containsDuplicate(nums))