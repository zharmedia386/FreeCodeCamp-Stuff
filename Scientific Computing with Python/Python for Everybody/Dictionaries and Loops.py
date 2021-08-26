counts = { 'chuck' : 1 , 'annie' : 42, 'jan': 100}
for key in counts:
    if counts[key] > 10:
        print(key, counts[key])

print('-----')

counts1 = { 'chuck' : 1 , 'annie' : 42, 'jan': 100}
for key,value in counts1.items() :
  print(key,value)