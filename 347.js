//todo ainda não resolvido, preciso resolver em O(n log n) mas não consegui pensar como
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();

    const set = new Set();
    for (let i = 0; i<nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 0);
        }

        const total = map.get(nums[i]) + 1;
        set.add(total);        
        map.set(nums[i], total);
    }

    
};

console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log(topKFrequent([1,2,1,2,1,2,3,1,3,2], 2))