/**
 * 242. Valid Anagram
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 let s = "anagram", t = "nagaram";
 var isAnagram = function(s, t) {
    if(s.length !==t.length) return false;
    let sCountChar={};
    for(let i=0;i<s.length;i++){
        var sChar=s[i];
        sCountChar[sChar]=sCountChar[sChar]+1 || 1;
    }

    for(let i=0;i<t.length;t++){
        const tChar=t[i];
        if(!sCountChar[tChar]) return false;
        else {
            console.log(" sCountChar[tChar]-- ::", sCountChar[tChar]--," >>> i >>>",i);
            sCountChar[tChar]--
        };
    }
    return true;
};

isAnagram(s,t)