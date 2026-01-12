/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const mapS = new Map();
    const mapT = new Map();    

    for (let i = 0; i < s.length; i++) {
        mapS.set(s[i], mapS.get(s[i]) ? mapS.get(s[i]) + 1 : 1);
        mapT.set(t[i], mapT.get(t[i]) ? mapT.get(t[i]) + 1 : 1);
    }

    const keys = Array.from(mapS.keys());
    
    for (let i = 0; i < keys.length; i++) {
        if (mapS.get(keys[i]) !== mapT.get(keys[i])) return false;
    }

    return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));