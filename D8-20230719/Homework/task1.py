food1=input("Enter food1")
food2=input("Enter food2")
user_food={"milk":1.02,"popcorn":2.5,"bread":2.5}
if (food1=="milk" and food2=="popcorn")or(food1=="popcorn" and food2=="milk"):
    print (user_food["milk"]+user_food["popcorn"])
elif (food1=="popcorn" and food2=="bread")or(food1=="bread" and food2=="popcorn"):
    print (user_food["popcorn"]+user_food["bread"])
elif (food1=="bread" and food2=="milk")or(food1=="milk" and food2=="bread"):
    print (user_food["bread"]+user_food["milk"])
else:
    print("your item is not available")