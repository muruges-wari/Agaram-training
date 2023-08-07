sentence=input("Enter the sentence: ")
    
def find_longest_word(words):
    words=words.split()
    longest_word=""
    for word in words:
        if len(word)>len(longest_word):
            longest_word=word
    return longest_word

final=find_longest_word(sentence)
print(final,"is the longest word")
