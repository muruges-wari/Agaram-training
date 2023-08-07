items_list = [
    {'name': 'Apple', 'category': 'Fruits'},
    {'name': 'Carrot', 'category': 'Vegetables'},
    {'name': 'Banana', 'category': 'Fruits'},
    {'name': 'Broccoli', 'category': 'Vegetables'},
]


def categ(a):
    new_dict={}
    fruits=[]
    vegetables=[]
    for item in a:
        if item["category"]=="Fruits":
            fruits.append(item["name"])
        elif item["category"]=="Vegetables":
            vegetables.append(item["name"])
    new_dict.update({"fruits":fruits,"vegetables":vegetables})
    return new_dict
final=categ(items_list)
print(final)

