lst=["flower","flow","flight"]
# position=0
# for i in lst:
#     if i//2:
#         position+=1
#         print(i)

same=""
position=0
for i in lst:
    for j in i:
        if j not in same:
            position+=1
            print(j)

