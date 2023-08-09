user=input("enter the sentence")
new_dict={}
user=user.split()
for word in user:
    if word in new_dict:
        new_dict[word]+=1
    else:
        new_dict[word]=1
print(new_dict)


# without split method:
string = "the quick brown fox jumps over the lazy dog the quick brown fox"
char = ''
dic_letter = {}
for i in string:
    if i == ' ':
        if char in dic_letter:
            dic_letter[char] += 1
        else:
            dic_letter[char] = 1
        char = ''
    else:
        char = char + i

print(dic_letter)