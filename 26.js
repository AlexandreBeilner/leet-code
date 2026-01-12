/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //nums = [23, 22, 12, 8, 8, 4, 4, 1]
    let currentElement = nums[0];
    let readerPointer = 1;
    let writePointer = 1;

    while (readerPointer < nums.length) {
        if (nums[readerPointer] !== currentElement) {
            nums[writePointer] = nums[readerPointer];
            writePointer+=1;
            currentElement = nums[readerPointer];
        }
        readerPointer+=1;
    }

    return writePointer;
};

console.log(removeDuplicates([23, 22, 12, 8, 8, 4, 4, 1]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([1]));