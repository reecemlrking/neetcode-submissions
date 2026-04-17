class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = {}
        for num in nums:
            if num in freq:
                freq[num] += 1
            else:
                freq[num] = 1
        keys = list(freq.keys())
        vals = list(freq.values())
        keyvals = list(zip(keys,vals))
        keyvals.sort(reverse=True,key=lambda a:a[1])
        sorted_keys = [key[0] for key in keyvals]
        return sorted_keys[:k]