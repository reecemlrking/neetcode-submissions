class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = board
        cols = [[board[i][j] for i in range(9)] for j in range(9)]
        nines = [[board[i+k][j+l] for i in range(3) for j in range(3)] for k in range(0,9,3) for l in range(0,9,3)]
        for row in rows:
            nums = []
            for cell in row:
                if cell != '.':
                    nums.append(cell)
            if len(set(nums)) != len(nums):
                return False
        for col in cols:
            nums = []
            for cell in col:
                if cell != '.':
                    nums.append(cell)
            if len(set(nums)) != len(nums):
                return False
        for nine in nines:
            nums = []
            for cell in nine:
                if cell != '.':
                    nums.append(cell)
            if len(set(nums)) != len(nums):
                return False
        return True
        
        
        