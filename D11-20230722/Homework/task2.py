grocery_items=[
    {"item":"apples","price":2.50},
    {"item":"bananas","price":1.70},
    {"item":"milk","price":3.20},
    {"item":"bread","price":2.00},
    {"item":"eggs","price":2.80},
    {"item":"cheese","price":5.50},
    {"item":"tomatoes","price":1.90},
    {"item":"potatos","price":2.10},
    {"item":"onion","price":1.50},
    {"item":"chicken","price":8.00},
]
budget_limit=int(input("enter the amount you have: "))
selected_item=input("which item you want to buy: ")
for item in grocery_items:
    if item["item"]==selected_item:
        max_quantity=int(budget_limit/item["price"])
        remaining_cost=budget_limit%item["price"]
        total_cost=item["price"]*max_quantity
        #print(remaining_cost)
        if max_quantity>0:
            print(item["item"],int(max_quantity),"units-total_cost:$",total_cost)
            if remaining_cost>0:
                print("Remaining amount you have",remaining_cost)
        else:
            print("Sorry you didn't have enough amount to buy an item")
            print("please enter the correct item")
