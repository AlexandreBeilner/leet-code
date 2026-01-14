//todo ainda não resolvido

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let middle = Math.floor(nums.length / 2 );
    let cursor = middle;

    while (cursor >= 0) {
        console.log(nums[cursor]);
        cursor --;
    }

    let cursor2 = middle + 1;
    while (cursor2 < nums.length) {
        console.log(nums[cursor2]);
        cursor2 ++;
    }
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6   from [4,-1,2,1]
console.log(maxSubArray([5,4,-1,7,8])); // 23 from [5,4,-1,7,8]
console.log(maxSubArray([5,4,-1,7,8, 9]));
console.log(maxSubArray([5, 4, 3, -8, -9, 2, 3, 4, 5, -1, 2, -9, -5, -13, 14, 1]));