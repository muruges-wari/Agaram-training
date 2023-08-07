sentence=input("Enter the sentence: ")
def find_max_vowels(words):
    words=words.split()
    max_vowel=""
    for word in words:
        for ele in word:
            if ele=="a" or "e" or "i" or "o" or "u":
                len(word)==len(ele)
                max_vowel=word
    return max_vowel
final=find_max_vowels(sentence)
print(final)