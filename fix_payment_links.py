#!/usr/bin/env python3
"""Fix payment links with extra quotes"""

import re

files_to_fix = [
    'script-generator.html',
    'freelancer-crm.html',
    'ai-creator.html',
    'local-life.html',
    'enterprise-ai.html',
    'payment.html',
    'join-us.html'
]

for filepath in files_to_fix:
    with open(f'/Users/liyanmei/WorkBuddy/Claw/{filepath}', 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Fix payment links with extra quotes at the end
    content = re.sub(r"(payment\.html[^\"']+)['\"]+", r"\1", content)

    # Fix empty <h1></h1> by removing them
    content = re.sub(r'<h1>\s*</h1>', '', content)

    # Remove empty divs with just space
    content = re.sub(r'<div class=\"\w+\">\s*</div>', '', content)

    if content != original:
        with open(f'/Users/liyanmei/WorkBuddy/Claw/{filepath}', 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Fixed: {filepath}')
    else:
        print(f'No changes: {filepath}')

print('\nDone!')
