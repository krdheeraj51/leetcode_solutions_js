/**
 * 238. Product of Array Except Self
 * 
 * Given an integer array nums, return an array answer such that answer[i] is equal to 
 * the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*var productExceptSelf = function (nums) {
    let newArray = [];
    for (let i = 0; i < nums.length; i++) {
        let productRes = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) productRes = productRes * nums[j]
        }
        newArray.push(parseInt(productRes));
    }
    return newArray
};
*/

var productExceptSelf = function (nums) {
    let outPut = nums.map(n => 1);
    let product = 1;

    /** Multiply from left  */
    for (let i = 0; i < nums.length; i++) {
        outPut[i] = parseInt(outPut[i] * product);
        product = product * nums[i];
    }

    /** Multiply from right  */
    product = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        outPut[j] = parseInt(outPut[j] * product);
        product = product * nums[j];

    }

    return outPut;

};

// console.log(productExceptSelf([-1,1,0,-3,3]))
module.exports = {
    productExceptSelf
}

