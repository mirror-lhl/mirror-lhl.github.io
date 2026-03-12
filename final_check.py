#!/usr/bin/env python3
import re
import json

files_to_check = [
    ('script-generator.html', 'Project 1'),
    ('geo-optimizer.html', 'Project 2'),
    ('freelancer-crm.html', 'Project 3'),
    ('ai-creator.html', 'Project 4'),
    ('local-life.html', 'Project 5'),
    ('enterprise-ai.html', 'Project 6'),
    ('index.html', 'Home Page'),
    ('payment.html', 'Payment Page'),
    ('join-us.html', 'Join Us Page')
]

def check_file(filepath):
    with open(f'/Users/liyanmei/WorkBuddy/Claw/{filepath}', 'r', encoding='utf-8') as f:
        content = f.read()
    
    issues = {}
    
    # Check Chinese characters
    chinese_chars = re.findall(r'[\u4e00-\u9fff]', content)
    if chinese_chars:
        issues['chinese_characters'] = len(chinese_chars)
    
    # Check empty elements
    empty_patterns = {
        'h1': len(re.findall(r'<h1>\s*</h1>', content)),
        'h2': len(re.findall(r'<h2>\s*</h2>', content)),
        'h3': len(re.findall(r'<h3>\s*</h3>', content)),
        'p': len(re.findall(r'<p>\s*</p>', content)),
    }
    
    empty_elements = {k: v for k, v in empty_patterns.items() if v}
    if empty_elements:
        issues['empty_elements'] = empty_elements
    
    # Check for payment links with issues
    bad_payment = re.findall(r"href=['\"]payment\.html\?[^'\"]*['\"]>", content)
    if bad_payment:
        issues['bad_payment_links'] = len(bad_payment)
    
    # Check payment links (count)
    payment_links = re.findall(r"payment\.html\?[^'\"]*['\"]", content)
    if payment_links:
        issues['payment_link_count'] = len(payment_links)
    
    return issues

results = {}
for filepath, name in files_to_check:
    issues = check_file(filepath)
    if issues:
        results[name] = {
            'file': filepath,
            'issues': issues
        }

print(json.dumps(results, indent=2, ensure_ascii=False))
