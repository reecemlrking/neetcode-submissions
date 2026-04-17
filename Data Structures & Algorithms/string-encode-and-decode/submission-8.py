class Solution:

    def encode(self, strs: List[str]) -> str:
        if len(strs) == 0:
            return ''
        pkey = 'super duper secure key'
        key = 0
        for char in pkey:
            key = key ^ ord(char)
        # print(key)
        chars = '0'+'?\\|//.\\|//?'.join(strs)
        encoding = ''
        # print(chars)
        for char in chars:
            encoded_char = key ^ ord(char)
            encoding += chr(encoded_char)
            key = key ^ encoded_char
        # print(encoding)
        return encoding

    def decode(self, s: str) -> List[str]:
        if s == '':
            return []

        pkey = 'super duper secure key'
        key = 0
        for char in pkey:
            key = key ^ ord(char)
        decoded_word = ''
        for char in s:
            decoded_char = key ^ ord(char)
            decoded_word += chr(decoded_char)
            key = key ^ ord(char)
        return decoded_word[1:].split('?\\|//.\\|//?')
