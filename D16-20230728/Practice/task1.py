list=["group A","group B","group C"]
user=input("Enter group A or group B or group C")

# if user=="group A":
#     print("True")
# elif user=="group B":
#     print("True")
# elif user=="group C":
#     print("True")
# else:
#     print("False")

# if user in list:
#     print("true")
# else:
#     print("false")

for x in list:
    if x==user:
        print("true")
        break
    else:
        print("false")
        break
