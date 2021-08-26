# Bila ada direplace, bila tidak di append
dict = {"Fri": 20, "Thu": 6, "Sat": 1}
dict["Thu"] = 13
dict["Sat"] = 2
dict["Sun"] = 9 

print(dict)

# Method Get -> getValue dengan key tertentu kalau nggak ada tambahkan pesan
counts = { 'quincy' : 1 , 'mrugesh' : 42, 'beau': 100, '0': 10}
print(counts.get('kris', 0))

my_dict = {'a': 1, 'b': 2, 'c': 3}
keys = ['a','b','c','d']
for key in keys :
  print(my_dict.get(key,'Gak ada'))

print(my_dict)