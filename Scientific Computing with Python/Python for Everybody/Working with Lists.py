"""
Add an item to a list in Python (append, extend, insert)
"""

list1 = [1,2,3,4]
list2 = list3 = list1.copy()
list1.append([5,6,7])
print(list1)

list2.insert(0,[100,200,300])
print(list2)
list2.insert(0,'test')
print(list2)

# dipecah
list3.extend('new')
print(list3)