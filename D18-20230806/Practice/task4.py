# a=[1,0,2,3,0,4,0,5,0]
# lst=[]
# for i in range(len(a)):
#     if i==0:
#         lst=lst+[0]
#         print(lst)

a=[1,0,2,3,0,4,0,5,0,0,9,0]
new=[]
for i in  a :
    if len(a)!=len(new) :
        if i!=0:
            new=new+[i]
        elif i==0:
            new=new+[i]
            if len(a)!=len(new):
                new=new+[i]
print(new)