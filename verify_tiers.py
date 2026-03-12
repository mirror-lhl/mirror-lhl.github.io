#!/usr/bin/env python3
import re

files = [
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

valid_tiers = ['$10,000', '$100,000', '$1,000,000', '$10,000,000']

for filename in files:
    filepath = f'/Users/liyanmei/WorkBuddy/Claw/{filename}'
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all price patterns
    prices = re.findall(r'\$[0-9,]+', content)
    
    # Filter to only tier prices (with commas)
    tier_prices = [p for p in prices if ',' in p]
    
    if tier_prices:
        unique_prices = set(tier_prices)
        print(f"\n{filename}:")
        for price in sorted(unique_prices):
            if price not in valid_tiers:
                print(f"  ⚠️  {price} (not in tier)")
            else:
                print(f"  ✓  {price}")

print("\n✓ Price tier verification complete")
