class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if nums == []:
            return 0
        sequences = {}
        numSet = set(nums)
        for num in numSet:
            if num - 1 not in numSet:
                sequences[num] = 1
                i = 1
                while num + i in numSet:
                    sequences[num] += 1
                    i+=1
        return max(sequences.values())
        