class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // string: s = 'abcdabcda'
        // start at index 0, find the longest substring from there
        // move to index 1, find longest
        // etc.
        let longest = 0;
        for (let i = 0; i < s.length; i++) {
            let freq = new Map();
            freq.set(s[i], 1)
            let j = i+1;
            let len = 1;
            let valid = true;
            while (valid && j < s.length) {
                if (freq.has(s[j])) {
                    valid = false;
                } else {
                    freq.set(s[j],1);
                    j++;
                    len++;
                } 
            }
            longest = Math.max(longest, len);
        }
        return longest;
    }
}
