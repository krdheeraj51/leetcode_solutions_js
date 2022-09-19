const {merge} =require('../mergeIntervals');

test("check merge Intervals for input [[1,3],[2,6],[8,10],[15,18]]",()=>{
    const result=merge([[1,3],[2,6],[8,10],[15,18]]);
    expect(result).toEqual([[1,6],[8,10],[15,18]])
})