#!/usr/bin/env python3
import re

# Price mapping: old prices to new tier structure
# Tier 1: $10,000
# Tier 2: $100,000
# Tier 3: $1,000,000

price_replacements = {
    # Individual product prices - all to tier-based
    '$1.38': '$10,000',
    '$2.76': '$100,000',
    '$6.93': '$1,000,000',
    '$278': '$10,000',
    '$694': '$100,000',
    '$1,389': '$1,000,000',
    '$0.14': '$10,000',
    '$13.89': '$100,000',
    '$4.17': '$10,000',
    '$69.44': '$100,000',
    '$27.78': '$10,000',
    
    # Revenue targets - adjust to tier structure
    '$1.39,000-55,000': '$10,000-1,000,000',
    '$0.140,000-500,000': '$10,000-1,000,000',
    '$0.14M-5M': '$10,000-1,000,000',
    '$4.17M-500M': '$100,000-1,000,000',
    '$69.44M-5B': '$100,000-1,000,000',
    '$27.78M-300M': '$10,000-1,000,000',
    
    # Revenue goals
    '$0.14 Million': '$100,000',
    '$13.89 Million': '$1,000,000',
    '$13.89 Billion': '$100,000,000',
    
    # Milestone targets
    '$1 Million': '$1,000,000',
    '$10M': '$10,000,000',
    '$13.89 Million': '$1,000,000',
    '$13.89 Billion': '$100,000,000',
    
    # Monthly targets
    '$1,389/month': '$10,000/month',
    '$278/month': '$10,000/month',
    '$694/month': '$100,000/month',
    '$1,389/month': '$1,000,000/month',
    
    # Commission rates
    '$10,000': '$10,000',
    '$100,000': '$100,000',
    '$1,000,000': '$1,000,000',
}

files_to_update = [
    'index.html',
    'script-generator.html',
    'geo-optimizer.html',
    'freelancer-crm.html',
    'ai-creator.html',
    'local-life.html',
    'enterprise-ai.html',
    'payment.html',
    'payment-personal.html',
    'join-us.html',
]

for filename in files_to_update:
    filepath = f'/Users/liyanmei/WorkBuddy/Claw/{filename}'
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        for old_price, new_price in price_replacements.items():
            content = content.replace(old_price, new_price)
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ {filename} updated")
        else:
            print(f"  {filename} (no changes)")
            
    except Exception as e:
        print(f"✗ Error in {filename}: {e}")

print("\nAll prices updated to tier structure: $10,000 | $100,000 | $1,000,000")
