/**
 * 79. Word Search
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    let found =false;
    for(let row=0;row< board.length;row++){
        for(let col=0;col<board[0].length;col++){
            if(board[row][col]===word[0]){
                dfs(row,col,0,word)
            }
        }
    }    
    function dfs(row,col,count,word){
        if(count===word.length){
            found = true;
            return;
        }
        if(row <0 || row >=board.length 
            || col <0 
            || col >=board[0].length 
            || board[row][col]!==word[count]
            ||found){
                return;
            }
        let temp=board[row][col];
        board[row][col]="";
        dfs(row+1,col,count+1,word);
        dfs(row-1,col,count+1,word);
        dfs(row,col+1,count+1,word);
        dfs(row,col-1,count+1,word);
        board[row][col]=temp;
    }
    return found;
};

module.exports={
    exist
}