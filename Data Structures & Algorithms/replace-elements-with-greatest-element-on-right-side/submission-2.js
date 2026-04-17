class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            console.log(i, arr.slice(i+1), Math.max(...arr.slice(i+1)))
            let max = Math.max(...arr.slice(i+1))
            arr[i] = max;
        }
        arr[arr.length-1] = -1;
        return arr
    }
}
