const {productExceptSelf}=require('../productArray');

test('Product of Array Except Self for [1,2,3,4] array',()=>{
    const result= productExceptSelf([1,2,3,4]);
    expect(result).toEqual([24,12,8,6])
})

test('Product of Array Except Self for [-1,1,0,-3,3] array',()=>{
    const result= productExceptSelf([-1,1,0,-3,3]);
    expect(result).toEqual([0,0,9,0,0])
})