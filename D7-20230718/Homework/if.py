"""
name=input("enter your name")
gender=input("enter your gender")
age=int(input("enter your age"))
if age>60:
    if (gender=="male"):
        print("Hi "+"Mr."+name+" you are a senior citizen")
    else:
        print("Hi "+"Mrs."+name+" you are a senior citizen")
elif age>=18:
    if (gender=="male"):
        print("Hi "+"Mr."+name+" you are an adult")
    else:
        print("Hi "+"Mrs."+name+" you are an adult")
else:
    if (gender=="male"):
        print("Hi "+"Mr."+name+" you are a teenager")
    else:
        print("Hi "+"Ms."+name+" you are a teenager")

"""

age=int(input("Enter your age"))
if age<3:
    print("Free ticket")
elif age>=3 and age<=12:
    print("Ticket $10")
elif age>=65:
    print("Ticket $12")
else:
    print("Ticket $15")
