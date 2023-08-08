# number=int(input("Enter the number"))
# for i in range(1,(number*number)+1):
#     print(i,end="")
#     if i%number==0:
#         print("\n")
    

number=int(input("enter the number"))
for i in range(number*number,0,-1):
    if  i%number==0:
        print("\n")
    print(i,end="")

