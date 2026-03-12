#!/usr/bin/env python3
"""Check all project files for issues"""

import re
import json

files_to_check = [
    ('script-generator.html', 'Project 1'),
    ('geo-optimizer.html', 'Project 2'),
    ('freelancer-crm.html', 'Project 3'),
    ('ai-creator.html', 'Project 4'),
    ('local-life.html', 'Project 5'),
    ('enterprise-ai.html', 'Project 6'),
    ('index.html', 'Home'),
    ('payment.html', 'Payment'),
    ('join-us.html', 'Join Us')
]

def check_file(filepath):
    with open(f'/Users/liyanmei/WorkBuddy/Claw/{filepath}', 'r', encoding='utf-8') as f:
        content = f.read()

    issues = {}

    # Check for Chinese characters
    chinese_chars = re.findall(r'[\u4e00-\u9fff]', content)
    if chinese_chars:
        issues['chinese_chars'] = len(chinese_chars)

    # Check for empty elements
    empty_patterns = {
        '<h1></h1>': re.findall(r'<h1></h1>', content),
        '<h2></h2>': re.findall(r'<h2></h2>', content),
        '<h3></h3>': re.findall(r'<h3></h3>', content),
        '<h4></h4>': re.findall(r'<h4></h4>', content),
        '<p></p>': re.findall(r'<p></p>', content),
        '<li></li>': re.findall(r'<li></li>', content),
        '<a href=""></a>': re.findall(r'<a href=\"\"></a>', content),
    }

    found_empty = {k: len(v) for k, v in empty_patterns.items() if v}
    if found_empty:
        issues['empty_elements'] = found_empty

    # Check for payment links
    payment_links = re.findall(r"payment\.html[^\"']*", content)
    if payment_links:
        issues['payment_links'] = payment_links

    # Check for extra quotes in payment links
    bad_payment_links = re.findall(r"payment\.html[^\"']*['\"]+", content)
    if bad_payment_links:
        issues['bad_payment_links'] = bad_payment_links

    # Check for double punctuation
    double_punct = re.findall(r'[,，]{2,}', content)
    if double_punct:
        issues['double_punctuation'] = double_punct[:5]  # Limit to 5 examples

    return issues

results = {}
for filepath, name in files_to_check:
    issues = check_file(filepath)
    if issues:
        results[name] = {
            'file': filepath,
            'issues': issues
        }

# Print results
print(json.dumps(results, indent=2, ensure_ascii=False))
