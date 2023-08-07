friends_details=[{
    "name":"Sangeetha",
    "place":"vadasery",
    "hobbies":["drawing","gardening","reading"]
},
{
    "name":"Rofiya",
    "place":"vadasery",
    "hobbies":["listening music,","editing","sleeping"]
},
{
    "name":"Jeswin",
    "place":"parakkai",
    "hobbies":["bike riding","hand ball","movies"]
},
{
    "name":"Ramkarthick",
    "place":"krishnancoil",
    "hobbies":["gyming","roaming","movies"]
},
{
    "name":"Kumari",
    "place":"marungoor",
    "hobbies":["music","movies","reading"]
},
{
    "name":"Lingam",
    "place":"rosmiyapuram",
    "hobbies":["movies","m usic","travelling"]
},
{
    "name":"Saravanan",
    "place":"manalikarai",
    "hobbies":["gaming","travelling","music"]
}]
"""
for x in friends_details:
    for hobbies in x["hobbies"]:
        if hobbies=="drawing":
            x["eligible"]=True
            break
        else:
            x["eligible"]=False
print(friends_details)
"""

for x in friends_details:
    position=0
    for hobby in x["hobbies"]:
        if hobby=='drawing':
            x["hobbies"][position]='designing'
            position+=1
print(friends_details)
