/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        const temp = s[s.length-1-i];
        s[s.length-1-i] = s[i];
        s[i] = temp
    }
};

const array = ["h","e","l","l","o"]
reverseString(array);
console.log(array);


const array2 = ["H","a","n","n","a","h"];
reverseString(array2);
console.log(array2);

const array3 = ['a'];
reverseString(array3);
console.log(array3);

