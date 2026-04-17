class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        for i, op1 in enumerate(numbers):
            op2 = target - op1
            if op2 in numbers:
                return [i+1, numbers.index(op2)+1]
        return []