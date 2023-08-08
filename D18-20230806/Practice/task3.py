# n=int(input("enter the number"))
# for i in range(n):
#     for j in range(n-i):
#         print("x",end="")
#     print("")

n=int(input("enter the number"))
for i in range(n):
    for j in range(i+1):
        print("x",end="")
    print("")