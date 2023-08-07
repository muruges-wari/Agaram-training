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
login_register=input("enter login or register:")
def login(a,b):
    if a=="login":
        email=input("email: ")
        password=input("password: ")
        for x in userdetails:
            if email==x["e_mail"] and password==x["password"]:
                print(x["name"]," you are logged in successfully")
            else:
                print("incorrect username/password")
    elif a=="register":
        register_name=input("name: ")
        register_email=input("e_mail: ")
        register_password=input("password: ")
        register_cpassword=input("confirm password: ")
        if register_password==register_cpassword:
            print("you are registered successfully")
            b.append({"name":"register_name","e_mail":"register_email","password":"register_password"})
        else:
            print("incorrect password")
login(login_register,userdetails)