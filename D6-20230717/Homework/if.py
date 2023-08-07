
total_amt=int(input("Enter total_amt"))
if total_amt>500 and total_amt<=1000:
    print("silver token")
elif total_amt>1000 and total_amt<5000:
    print("golden token")
elif total_amt>=5000:
    print("platinum token")
else:
    print("no token")




email=(input("enter email"))
password=(input("enter password"))
if email=="example@gmail.com" and password==123456:
    print("you are logged in sucessfully")
else:
    print("wrong password")



