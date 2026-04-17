class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let ptr = 0;
        for (const char of s) {
            while (t[ptr] !== char) { 
                ptr++;
                if (ptr >= t.length) {
                    return false;
                }
            }
            ptr++;
        }
        return true;
    }
}
