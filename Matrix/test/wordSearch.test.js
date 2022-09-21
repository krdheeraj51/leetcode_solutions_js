const {exist} =require("../wordSearch");

test('Word search for  [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]] and word will be ABCB',()=>{
    const result= exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCB");
    expect(result).toBe(false)
});