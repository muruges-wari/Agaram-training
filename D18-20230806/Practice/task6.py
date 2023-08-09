num_list=[2,5,8,1,9,3,7,10,15]
largest_num=0
small_number=num_list[0]
for i in num_list:
    if i>largest_num:
        largest_num=i
    if i<small_number:
        small_number=i
    final=largest_num-small_number
# print(largest_num)
# print(small_number)
print(final,"(",largest_num,"-",small_number,")")

