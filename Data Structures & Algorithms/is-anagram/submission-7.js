class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const sChars = new Map();
        const tChars = new Map();
        for (let i = 0; i < s.length; i++) {
            if (sChars.has(s[i])) {
                let freq = sChars.get(s[i]) + 1
                sChars.set(s[i], freq);
            } else {
                sChars.set(s[i], 1);
            }
            if (tChars.has(t[i])) {
                let freq = tChars.get(t[i]) + 1
                tChars.set(t[i], freq);
            } else {
                tChars.set(t[i], 1);
            }
        }

        for (const key of sChars.keys()) {
            console.log(sChars)
            console.log(tChars)
            if (sChars.get(key) !== tChars.get(key) || ! tChars.has(key)){
                return false;
            }
        }
        return true;
        
    }
}
