class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        // for (let i = 0; i < arr.length - 1; i++) {
        //     let max = Math.max(...arr.slice(i+1))
        //     arr[i] = max;
        // }
        // arr[arr.length-1] = -1;
        // return arr
        let greatest = -1;
        let i = arr.length -1;

        while(i >= 0) {
            const original = arr[i];
            arr[i] = greatest;
            greatest = original > greatest ? original : greatest;
            i--;
        }

        return arr;
    }
}
