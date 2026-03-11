//expected sum of numbers from 1 to (n+1) be calculated
// using formula n(n+1)/2. By subtracting actual sum from expected
// sum, the missing number can be found.

function findMissingNumber(arr){
    const n = arr.length+1;
    const expectedSum= (n*(n+1))/2;

    const actualSum = arr.reduce((sum,num)=> sum + num,0);
    return expectedSum-actualSum;
}

const arr1= [3,7,1,2,8,4,5];
const arr2= [1,2,4,5,6];

console.log(findMissingNumber(arr1));
console.log(findMissingNumber(arr2))

//Note: This approch is efficient than sorting or additional loops
// Time Complexity: O(n)
//Space Complexity: O(1)