class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if nums == []:
            return 0
        sequences = {}
        for num in nums:
            if num - 1 not in nums:
                sequences[num] = 1
                i = 1
                while num + i in nums:
                    sequences[num] += 1
                    i+=1
        return max(sequences.values())
        