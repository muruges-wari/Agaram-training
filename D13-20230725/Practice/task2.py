
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
    "hobbies":["movies","music","travelling"]
},
{
    "name":"Saravanan",
    "place":"manalikarai",
    "hobbies":["gaming","travelling","music"]
}]
# hobby_name=[]
# for hobby in friends_details:
#     hobbies=hobby["hobbies"]
#     for hobby_list in hobby:
#         if hobby_list in hobby_name:
# print(hobby_name)


friends_details.append({"name":"gayu","place":"vadasery","hobbies":["drawing","dancing"]})
# print(friends_details)

for hobby in friends_details:
    for hobby_list in hobby["hobbies"]:
        if hobby_list=="drawing":
            hobby["eligible"]="true"
            break
        else:
            hobby["eligible"]="false"
print(friends_details)


