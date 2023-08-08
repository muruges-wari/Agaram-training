def count(word):
        sum=0
        for char in word:
            vowal="aeiouAEIOU"
            if char in vowal:
                sum=sum+1
        return sum
                

                
def max_vowal(line):
    words=[]
    
    max_vowal_count=0
    max_vowal_word=""
    words=line.split()
    
    for word in words:
        vowal_count=count(word)
        if vowal_count>max_vowal_count:
            max_vowal_count=vowal_count
            max_vowal_word=word
    print(max_vowal_word)
    print(max_vowal_count)
sentance=input("enter the sentance:")
max_vowal(sentance)