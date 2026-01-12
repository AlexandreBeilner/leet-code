/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const number = map.get(nums[i]);
        if (number !== undefined) return [number, i]
        map.set(target - nums[i], i);
        
    }
};

console.log(twoSum([2,7,11,15], 9))