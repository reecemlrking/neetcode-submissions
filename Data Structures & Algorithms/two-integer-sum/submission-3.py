class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        i = 0
        while i+1 < len(nums):
            op1 = nums[i]
            op2 = target - op1
            if op2 in nums[i+1:]:
                j = nums.index(op2, i+1, len(nums))
                return [i,j]
            i += 1
        return []