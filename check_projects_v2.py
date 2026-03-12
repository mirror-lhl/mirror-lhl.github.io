#!/usr/bin/env python3
"""Check all project files for issues more accurately"""

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
        '<h1></h1>': re.findall(r'<h1>\s*</h1>', content),
        '<h2></h2>': re.findall(r'<h2>\s*</h2>', content),
        '<h3></h3>': re.findall(r'<h3>\s*</h3>', content),
        '<h4></h4>': re.findall(r'<h4>\s*</h4>', content),
        '<p></p>': re.findall(r'<p>\s*</p>', content),
        '<li></li>': re.findall(r'<li>\s*</li>', content),
        '<a href=""></a>': re.findall(r'<a href=\"\">\s*</a>', content),
    }

    found_empty = {k: len(v) for k, v in empty_patterns.items() if v}
    if found_empty:
        issues['empty_elements'] = found_empty

    # Check for payment links
    payment_links = re.findall(r"payment\.html\?[^'\"]*'", content)
    payment_links.extend(re.findall(r"payment\.html\?[^'\"]*\"", content))
    if payment_links:
        issues['payment_links'] = payment_links

    # Check for extra quotes at end of payment links (before closing >)
    bad_payment = re.findall(r"payment\.html\?[^>]*['\"]>", content)
    if bad_payment:
        issues['bad_payment_end'] = bad_payment

    # Check for double punctuation
    double_punct = re.findall(r'[,，]{2,}', content)
    if double_punct:
        issues['double_punctuation'] = len(double_punct)

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
if results:
    print(json.dumps(results, indent=2, ensure_ascii=False))
else:
    print("No issues found!")
