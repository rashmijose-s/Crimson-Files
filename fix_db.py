import re

with open('update_db.py', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('\\"\\"\\"', '\"\"\"')

with open('update_db.py', 'w', encoding='utf-8') as f:
    f.write(content)
