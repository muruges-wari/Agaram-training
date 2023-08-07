"""
mixed_list=[1,2.0,"hai","@",5,6,"&",8,9]
numbers_count=0
for x in mixed_list:
    if type(x)==int:
        numbers_count+=1
print("Numbers in a mixed list is:",numbers_count)

list=[3,5,15,30,60,2]
for li in list:
    if li%3==0 and li%5==0:
        print("fizzbuzz")
    elif li%5==0:
        print("buzz")
    elif li%3==0:
        print("fizz")
    else:
        print(li)
"""       




