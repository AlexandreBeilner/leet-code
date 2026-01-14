/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let commomPrefic = strs[0];

    for(let i=0; i<strs.length; i++) {
        if (! strs[i].startsWith(commomPrefic)) {
            let tempPrefix = '';
            for (let j = 0; j < commomPrefic.length; j++) {
                if (commomPrefic[j] === strs[i][j]) {
                    tempPrefix += commomPrefic[j];
                } else {
                    break;
                }
            }
            commomPrefic = tempPrefix;
            if (commomPrefic === '') return "";
        }
    }
    return commomPrefic;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));

