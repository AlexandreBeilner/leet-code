/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let totalSum = 0;
    for (let i = 0; i < nums.length; i++) {
        const {possibilities, sum} = getDivisions(nums[i]);
        if (possibilities === 4) {
            totalSum += sum;
        }
    }

    return totalSum;
};

const mapping = {};

function getDivisions(number) {
    if (mapping[number]) return mapping[number];

    let sum = number;
    let possibilities = 1;

    for (let i = Math.floor(number/2); i > 0; i--) {
        if (number % i === 0) {
            possibilities++;
            sum += i;
        }
        if (possibilities === 4 && i !== 1) {
            possibilities = 5;
            break;
        };
    } 

    mapping[number] = {
        possibilities, sum
    }
    return mapping[number];
}

console.log(sumFourDivisors([21,4,7]));
console.log(sumFourDivisors([21,21]));
console.log(sumFourDivisors([1,2,3,4,5]));