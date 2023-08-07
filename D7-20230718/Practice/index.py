"""
value=int(input("enter the value"))
if value%2==0:
    print("even number")
else:
    print("odd number")
"""

"""
value1=int(input("enter the value1"))
value2=int(input("enter the value2"))

if value1%value2==0:
    print("yes")
else:
    print("no")
"""
year=int(input("enter the year"))
if year%400==0 and year%100==0:
    print("leap year")
elif year%4==0 and not year%100==0:
    print("leap year")
else:
    print("it is not leap year")
