list=[2,3,5,4,7,9,8,1]
sum=9
def find_sum(num):
    pairs=""
    for i in range(len(num)):
        for j in range(i+1,len(num)):
            if num[i]+num[j]==sum:
                 pairs=pairs+str((num[i],num[j]))
    return pairs
final=find_sum(list)
print(final)