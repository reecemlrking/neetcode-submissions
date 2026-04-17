class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        pre = {0: 1}
        post = {len(nums)-1: 1}
        for i in range(1, len(nums)):
            pre[i] = pre[i-1] * nums[i-1]
            post[len(nums)-1-i] = post[len(nums)-i] * nums[len(nums)-i]
        prods = []
        for i in range(len(nums)):
            prods.append(pre[i]*post[i])
        return prods
