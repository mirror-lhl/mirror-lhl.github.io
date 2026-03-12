#!/usr/bin/env python3
"""Fix payment links with unclosed onclick attributes"""

import re

files_to_fix = [
    'script-generator.html',
    'freelancer-crm.html',
    'ai-creator.html',
    'local-life.html',
    'enterprise-ai.html'
]

for filepath in files_to_fix:
    with open(f'/Users/liyanmei/WorkBuddy/Claw/{filepath}', 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Fix: onclick="window.location.href='payment.html?...' class="
    # Should be: onclick="window.location.href='payment.html?...'" class="
    content = re.sub(
        r"onclick=\"window\.location\.href='payment\.html\?[^']+' class=\"",
        r"onclick=\"window.location.href='payment.html?\5'",
        content
    )

    if content != original:
        with open(f'/Users/liyanmei/WorkBuddy/Claw/{filepath}', 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Fixed: {filepath}')
    else:
        print(f'No changes: {filepath}')

print('\nDone!')
