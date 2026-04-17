class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        // let ptr = 0;
        // for (const char of s) {
        //     while (t[ptr] !== char) { 
        //         ptr++;
        //         if (ptr >= t.length) {
        //             return false;
        //         }
        //     }
        //     ptr++;
        // }
        // return true;
        let i = 0, j = 0;
        while (i < s.length && j < t.length) {
            if (s[i] === t[j]) {
                ++i;
                ++j;
            } else {
                ++j;
            }
        }
        return i >= s.length;
    }
}
