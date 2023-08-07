monthly_jwel_rate = [
    {"month":"Jan",
     "gold_rate":2000,
     "jwels_list":[{
         "name":"chain",
         "making_charge":12
     },{
         "name":"ring",
         "making_charge":10
     }]},
     {"month":"Feb",
     "gold_rate":4000,
     "jwels_list":[{
         "name":"chain",
         "making_charge":12
     },{
         "name":"ring",
         "making_charge":10
     }]},
     {"month":"March",
     "gold_rate":3600,
     "jwels_list":[{
         "name":"chain",
         "making_charge":12
     },{
         "name":"ring",
         "making_charge":10
     }]},
     {"month":"April",
     "gold_rate":3678,
     "jwels_list":[{
         "name":"chain",
         "making_charge":12
     },{
         "name":"ring",
         "making_charge":10
     }]},
     {"month":"May",
     "gold_rate":4500,
     "jwels_list":[{
         "name":"chain",
         "making_charge":12
     },{
         "name":"ring",
         "making_charge":10
     }]},
]

# below to find the minium and maximum gold rate 

min_rate = monthly_jwel_rate[0]["gold_rate"]
max_rate = 0
min_max_data  = {}
for jwel_data in monthly_jwel_rate:

    gold_rate = jwel_data["gold_rate"]
    month = jwel_data['month']

    if gold_rate <= min_rate:
        min_rate = gold_rate
        min_rate_month = month

    if gold_rate >= max_rate:
        max_rate = gold_rate
        max_rate_month = month

min_max_data['min_month_rate'] = {
    "month":min_rate_month,
    "gold_rate":min_rate,
    }
min_max_data['max_month_rate'] = {
    "month":max_rate_month,
    "gold_rate":max_rate}

# below code is to find the amount for minimum and maxium gold rate jwells 

for jwels_data in monthly_jwel_rate:

    jwels_list = jwels_data["jwels_list"]
    gold_rate = jwels_data["gold_rate"]
    month = jwels_data['month']
    for jwels in jwels_list:
        making_charge = gold_rate *(jwels["making_charge"]/100)
        gst = gold_rate * .18
        total = gold_rate + making_charge + gst
        if month == min_rate_month:
            min_max_data['min_month_rate'][jwels['name']] = total
        elif month == max_rate_month:
            min_max_data['max_month_rate'][jwels['name']] = total
            

print(min_max_data)