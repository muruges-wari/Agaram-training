items_list = [
    {'name': 'Apple', 'category': 'Fruit'},
    {'name': 'Carrot', 'category': 'Vegetable'},
    {'name': 'Banana', 'category': 'Fruit'},
    {'name': 'Broccoli', 'category': 'Vegetable'},
]
def fru_veg_list(items):
    new_dict={}
    for item in items:
        category=item["category"]
        name=item["name"]
        if category in new_dict:
            new_dict[category].append(name)
        else:
            new_dict[category]=[name]
    return new_dict
final=fru_veg_list(items_list)
print(final)