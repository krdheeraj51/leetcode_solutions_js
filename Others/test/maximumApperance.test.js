//1,3,4,5,3,6,7,8,1,3,5,6,1,3

const { getMaximuApparance } = require('../maximumAppearance');

test('Check for frequently occuring element from [1,3,4,5,3,6,7,8,1,3,5,6,1,3] array', () => {
   let getResult= getMaximuApparance([1,3,4,5,3,6,7,8,1,3,5,6,1,3]);
   expect(getResult).toBe(3);
})