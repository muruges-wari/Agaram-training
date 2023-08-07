veg_pizza=500*3
extra_toppings=80*2
soft_drinks=45*2
burger=150*2
delivery_charge=50
product_gst=(veg_pizza+extra_toppings+soft_drinks+burger+delivery_charge)*0.18
total_price=(veg_pizza+extra_toppings+soft_drinks+burger+delivery_charge+product_gst)
print(total_price)



product_price=45000
making_charge=(product_price*0.08)
wastage=(product_price*0.02)
shipping_charge=100
exclude_gst=(product_price+making_charge+wastage+shipping_charge)
product_gst=(exclude_gst*0.03)
total_price=(exclude_gst+product_gst)
print(total_price)

int_1=17
int_2=18
print(int_1+int_2)
print(int_1-int_2)
print(int_1*int_2)

str_1="Hello "
str_2="world"
print(str_1+str_2)

cat=True
print(cat)

float_1=102.100
float_2=20.001
print(float_1+float_2)
print(float_1-float_2)

fruits=["apple","melon","orange"]
print(len(fruits))
fruits.append("banana")
fruits.remove("apple")
print(fruits)

my_details= {
    "name":"Murugeswari",
    "age":21,
    "gender":"Female"
}
print(my_details["age"])


num=[85,92,78,90]
length=len(num)
avg=(num[0]+num[1]+num[2]+num[3])/length
print(avg)












