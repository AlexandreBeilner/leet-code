/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const n = nums.length / 2;
    const mapping = {};
    for (let i = 0; i < nums.length; i++) {
        if (!mapping[nums[i]]) {
            mapping[nums[i]] = 0;
        }
        mapping[nums[i]]++;

        if (mapping[nums[i]] === n) {
            return nums[i];
        }
    }
};

console.log(repeatedNTimes([1,2,3,3]));
console.log(repeatedNTimes([2,1,2,5,3,2]));
console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));