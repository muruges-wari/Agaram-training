friends_details=[{
    "name":"Sangeetha",
    "e_mail":"san@gmail.com",
    "password":"san@123",
    "hobbies":["drawing","gardening","reading"],
    "friends_list":["gayu","karthika","dharsh"]
},
    {
    "name":"gayathri",
    "e_mail":"gayu@gmail.com",
    "password":"gayu@123",
    "hobbies":["drawing","gardening","reading"],
    "friends_list":["gayu","karthika","dharsh"]
},
    {
    "name":"kamala",
    "e_mail":"kamala@gmail.com",
    "password":"kamala@123",
    "hobbies":["drawing","gardening","reading"],
    "friends_list":["gayu","karthika","dharsh"]
}]
e_mail=input("enter your email: ")
password=input("enter your password: ")
def user_login(log):
    for user in log:
        if e_mail==user["e_mail"] and password==user["password"]:
            user["logged_in"]=True
            print("Name is",user["name"])
            print("your hobbies are",user["hobbies"])
            print("your friends_list are",user["friends_list"])
        else:
            user["logged_in"]=False
user_login(friends_details)
print(friends_details)





