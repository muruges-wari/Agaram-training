userdetails = [{
    "name" : "saravana",
    "e_mail" : "saravana@gmail.com",
    "password" : "saravan@123",
},
{
    "name" : "benish",
    "e_mail" : "benish@gmail.com",
    "password" : "benish@123",
},
{
    "name" : "kabeesh",
    "e_mail" : "kabeesh@gmail.com",
    "password" : "kabeesh@123",
},
{
    "name" : "naathan",
    "e_mail" : "naathan@gmail.com",
    "password" : "naathan@123",
}]

login=input("Are you trying to login or register: ")
def user_login(l):
    if l=="login":
        login_email=input("e_mail: ")
        login_password=input("password: ")
        for x in userdetails:
            if login_email==x["e_mail"] and login_password==x["password"]:
                print(x["name"],"You are logged in successfully")
user_login(login)

def user_register(r,u):
    if r=="register":
        register_name=input("name: ")
        register_email=input("e_mail: ")
        register_password=input("password: ")
        register_cpassword=input("confirm password: ")
        if register_password==register_cpassword:
            print("you are registered successfully")
            u.append({"name":"register_name","e_mail":"register email","password":"register_password"})
        else:
            print("incorrect password")
user_register(login,userdetails)
