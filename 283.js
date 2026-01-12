/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pointer1 = 0, pointer2 = 0;

    //o pointer1 vai me dizer onde devo fazer a troca
    //o pointer2 vai percorer os elementos do array buscando por numeros

    while (pointer2 <= nums.length - 1) {
        const num = nums[pointer2];
        if (num !== 0) {
            nums[pointer2] = 0;
            nums[pointer1] = num;
            pointer1+=1;
        }
        pointer2+=1;
    }
};

const array1 = [0,1,0,2,3,12];
moveZeroes(array1);
console.log(array1);

const array2 = [0];
moveZeroes(array2);
console.log(array2);

const array3 = [0, 0, 0, 1];
moveZeroes(array3);
console.log(array3);

const array4 = [1, 0, 0, 1];
moveZeroes(array4);
console.log(array4);