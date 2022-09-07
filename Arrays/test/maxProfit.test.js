const { maxProfit } = require('../maxProfit');

test("Calculating max profit from given array [7,1,5,3,6,4]",()=>{
    let result=maxProfit([7,1,5,3,6,4]);
    expect(result).toBe(5)
})

test("Calculating max profit from given array [7,6,4,3,1]",()=>{
    let result=maxProfit([7,6,4,3,1]);
    expect(result).toBe(0)
})

