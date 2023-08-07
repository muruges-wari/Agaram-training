# monthly_gold_rate=[
#     {"month":"jan",
#      "gold_rate":2000,
#      "jewels_list":[{"name":"chain",
#                      "mc":7},
#                     {"name":"ring",
#                      "mc":10}]},
#     {"month":"april",
#     "gold_rate":1800,
#     "jewels_list":[{"name":"chain",
#                     "mc":7},
#                    {"name":"ring",
#                     "mc":10}]},
#     {"month":"june",
#     "gold_rate":2900,
#     "jewels_list":[{"name":"chain",
#                     "mc":7},
#                    {"name":"ring",
#                     "mc":10}]},
#     {"month":"nov",
#      "gold_rate":3000,
#      "jewels_list":[{"name":"chain",
#                      "mc":7},
#                     {"name":"ring",
#                      "mc":10}]},
#     {"month":"dec",
#     "gold_rate":5000,
#     "jewels_list":[{"name":"chain",
#                     "mc":7},
#                    {"name":"ring",
#                     "mc":10}]}]

# max_value=monthly_gold_rate[0]["gold_rate"]
# min_value=monthly_gold_rate[0]["gold_rate"]
# max_month=None
# min_month=None
# for i in monthly_gold_rate:
#     if i["gold_rate"]>max_value:
#         max_value=i["gold_rate"]
#         max_month=i["month"]
#     elif i["gold_rate"]<min_value:
#         min_value=i["gold_rate"]
#         min_month=i["month"]
# print(max_value,",goldrate is higher in ",max_month)
# print(min_value,",goldrate is lower in ",min_month)


# for i in monthly_gold_rate:
    
#     print( "Gold rate is ",i["rate"])
#     jewls_list = i["jewls_list"]
    
#     for j in jewls_list:
#                         # 2000 * 13 / 100
#         cal_mak_charge = i["rate"] * j['making_charge'] / 100
#         final_charge = i["rate"] + cal_mak_charge
#         print( j['name'] + " rate is "+ str(final_charge))
# """


user_details = [
                
                {
                    "name" : "ajay",
                    "marks" : [80,90,70,40,60]
                },
                {
                    "name" : "manimala",
                    "marks" : [100,80,40,90,70]
                },
                {
                    "name" : "abarna",
                    "marks" : [72,65,68,89,86]
                }
        ]
        
        
max_mark=user_details[0]["marks"]      
for student in user_details:
    # print(student['marks'])
    total = 0
    for x in student['marks']:
        total = total + x
    print(total,student["name"])