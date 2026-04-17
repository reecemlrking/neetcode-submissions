class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        frequencies = {}
        for word in strs:
            lower_word = word.lower()
            frequency = [0]*26
            a = ord('a')
            for char in lower_word:
                frequency[ord(char)-a] += 1
            if str(frequency) in frequencies:
                frequencies[str(frequency)].append(word)
            else:
                frequencies[str(frequency)] = [word]
        return list(frequencies.values())

