class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        // let i = 0, j = 0;
        // while (i < t.length && j < s.length) {
        //     console.log(i,j)
        //     if (t[i] === s[j]) {
        //         i++;
        //         j++;
        //     } else {
        //         j++;
        //     }
        // }
        // console.log(i,j)
        // return Math.max(t.length - i, 0);
        let idx = 0;

        for (let i = 0; i < s.length; i++) {
            if (s[i] === t[idx]) {
                idx++;
            }
        }

        return t.length - idx;
    }
}
