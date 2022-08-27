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
 let s = "aacc", t = "ccca";

//  "aacc"
// "ccac"
 var isAnagram = function(s, t) {
    /**
     * Method 1 
     * ----------------------------
     * 
    if(s.length !==t.length) return false;
    let sCountChar={};
    let newS=s.split('').sort().join('');
    let newT=t.split('').sort().join('');
    return newS === newT;
     * 
     */
   
    /**
     * Method 2 
     * -------------------------------
     let sCountChar={};
    let tCountChar={};
    for(let i=0;i<s.length;i++){
        var sChar=s[i];
        sCountChar[sChar]=sCountChar[sChar]+1 || 1;
    }
    console.log("sCountChar ::",sCountChar)

    for(let j=0;j<t.length;j++){
        const tChar=t[j];
        tCountChar[tChar]=tCountChar[tChar]+1 || 1;
    }
    let tCountCharSorted=Object.keys(tCountChar).sort().reduce((r, k) => (r[k] = tCountChar[k], r), {});
    let sCountCharSorted=Object.keys(sCountChar).sort().reduce((r, k) => (r[k] = sCountChar[k], r), {})
    return JSON.stringify(tCountCharSorted)===JSON.stringify(sCountCharSorted);
     */

    /**
     * Method 3
     */
    let sCountChar={};
    for(let i=0;i<s.length;i++){
        var sChar=s[i];
        sCountChar[sChar]=sCountChar[sChar]+1 || 1;
    }

    for(let j=0;j<t.length;j++){
        var tChar=t[j];
     if(!sCountChar[tChar]) return false;
     else {
        sCountChar[tChar]--;
     }
    }
    return true;
};

console.log(">>> ",isAnagram(s,t));