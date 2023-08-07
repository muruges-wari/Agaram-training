value1=int(input("Enter the value1 "))
value2=int(input("Enter the value2 "))
value3=int(input("Enter the value3 "))
if value1>value2:
    if value1>value3:
        print(value1,"is the largest number")
elif value2>value3:
    if value2>value1:
        print(value2,"is the largest number")
elif value3>value1:
    if value3>value2:
        print(value3, "is the largest number")
