list1 = []
list2 = []
list3 = list1
list4 = list1 + list2
print(id(list1),id(list2),id(list3))
print(id(list4))
print(list1 is list3)

print(0 is 0.0)
print(0 == 0.0)