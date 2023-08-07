list1=[10,30,50,70,90,110]
list2=[15,35,55,65,95,100]
position=0
for x in list1:
    if list1[position]>list2[position]:
        print(list1[position] ,"is greater than",list2[position])
        position=position+1
    else:
        print(list2[position],"is greater than",list1[position])
        position=position+1  
# for i in range (len(list1)):
#     if list1[i]>list2[i]:
#         print(list1[i],"is greater than" ,list2[i])
#     else:
#         print(list2[i],"is greater than" ,list1[i])
    
    

