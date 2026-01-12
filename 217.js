/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (set.has(element)) return true;
        set.add(element);
    }
    
    return false;
};