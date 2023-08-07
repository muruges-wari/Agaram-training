"""
num1=int(input("Enter the num1: "))
num2=int(input("Enter the num2:"))
mathematical_operator=input("Enter the mathematical_opeartor")
if mathematical_operator=="add":
    print(num1+num2,"is the addition of your numbers")
elif mathematical_operator=="subtract":
    print(num1-num2,"is the subtraction of your numbers")
elif mathematical_operator=="multiply":
    print(num1*num2,"is the multiplication of your numbers")
elif mathematical_operator=="divide":
    print(num1/num2,"is the dividion of your numbers")
"""

salary=int(input("Enter your salary: "))
if salary<=10000:
    HRA=salary*0.20
    DA=salary*0.05
    print(salary+HRA+DA)
elif salary>10000 and salary<=20000:
    HRA1=salary*0.25
    DA1=salary*0.07
    print(salary+HRA1+DA1)
elif salary>20000:
    HRA2=salary*0.30
    DA2=salary*0.08
    print(salary+HRA2+DA2)
else:
    print("Your salary is not calculated in gross salary")



"""
maths=int(input("Enter the maths mark: "))
physics=int(input("Enter the physics mark: "))
chemistry=int(input("Enter the chemistry mark"))
total_mark=maths+physics+chemistry
total_mark1=maths+physics
if maths>=65 and physics>=55 and chemistry>=50:
    if total_mark>=190 or total_mark1>=140:
        print("You are eligible")
else:
    print("You are not eligible") 

units=int(input("Enter the elec units: "))
cost=int(input("Enter the cost per unit: "))
elec_bill=units*cost
if units<100:
    gst=(elec_bill*0.18)
    print(elec_bill+gst)
if units>100 and units<=500:
    cost1=elec_bill+50
    gst=cost1*0.18
    print(cost1+gst)
elif units>500 and units<1000:
    extra=elec_bill*0.05
    gst=(elec_bill+extra)*0.18
    print(elec_bill+extra+gst)




num1=int(input("enter the num1"))
num2=int(input("enter the num2"))
num3=int(input("enter the num3"))
num4=int(input("enter the num4"))
num5=int(input("enter the num5"))
num6=num1+num2+num3
num7=num4*num5
num8=num6*num7
if num8%2==0:
    print("even")
else:
    print("odd")

"""


