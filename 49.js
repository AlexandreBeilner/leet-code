/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const groups = new Map();
    
    strs.forEach((str, index) => {
        const key = str.split('').sort().join('');
        if (!groups.has(key)) {
            groups.set(key, []);
        }

        groups.set(key, [...groups.get(key), index])
    })

    return Array.from(groups.values()).map(indexes => {
        return indexes.map(index => strs[index]);
    })
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));