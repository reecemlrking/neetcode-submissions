class Solution:
    def isPalindrome(self, s: str) -> bool:
        start = 0
        end = len(s)-1
        while start < end:
            print(start, end)
            while start < end and ((ord('a') > ord(s[start].lower()) and ord(s[start].lower()) > ord('9')) or ord(s[start].lower()) > ord('z') or ord(s[start].lower()) < ord('0')):
                start += 1
                print(start)
            while start < end and ((ord('a') > ord(s[end].lower()) and ord(s[end].lower()) > ord('9')) or ord(s[end].lower()) > ord('z') or ord(s[end].lower()) < ord('0')):
                end -= 1
                print(end)
            if s[start].lower() != s[end].lower():
                return False
            start += 1
            end -= 1
        return True