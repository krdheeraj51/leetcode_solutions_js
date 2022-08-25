/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
https://leetcode.com/problems/valid-parentheses/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
let s= "(]";
 var isValid = function(s) {
    let stack=[];
    let pairHashMap={"(":")","{":"}","[":"]"};
    for(let i=0;i<s.length;i++){
        console.log("index : ",i)
        let char=s[i];
        if(pairHashMap[char]){
            stack.push(char);
        }
    
        else if(pairHashMap[stack.pop()]!==char){
            return false;
        }
    }
    return stack.length===0;
};

isValid(s);