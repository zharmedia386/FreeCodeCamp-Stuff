counts = { 'chuck' : 1 , 'annie' : 42, 'jan': 100}
lst = []
for key, val in counts.items():
    newtup = (val, key)
    lst.append(newtup)
lst = sorted(lst, reverse=True)
print(lst)