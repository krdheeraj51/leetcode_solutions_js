const { intersectionOperation } = require('../intersectionArray');

test("Perform intersection operation on these arrays  nums1 = [4,9,5], nums2 = [9,4,9,8,4]", () => {
    let result = intersectionOperation([4, 9, 5], [9, 4, 9, 8, 4])
    expect(result).toEqual([4, 9])
})