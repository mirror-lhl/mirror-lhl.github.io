#!/usr/bin/env python3
"""Fill enterprise-ai.html with complete content"""

import re

# Read the file
with open('/Users/liyanmei/WorkBuddy/Claw/enterprise-ai.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Product content for all 6 products
products = [
    {
        'name': 'AI CRM System',
        'subtitle': 'Customer Relationship Management',
        'features': [
            'AI-powered lead scoring and prediction',
            'Automated customer segmentation',
            'Intelligent sales forecasting',
            'Multi-channel customer communication',
            'Real-time analytics dashboard'
        ],
        'prices': [
            ('$10,000', 'Basic Plan'),
            ('$100,000', 'Professional Plan'),
            ('$1,000,000', 'Enterprise Plan')
        ]
    },
    {
        'name': 'AI HR Management',
        'subtitle': 'Human Resources Automation',
        'features': [
            'AI resume screening and matching',
            'Automated interview scheduling',
            'Employee performance analytics',
            'Predictive retention models',
            'Smart onboarding workflow'
        ],
        'prices': [
            ('$10,000', 'Basic Plan'),
            ('$100,000', 'Professional Plan'),
            ('$1,000,000', 'Enterprise Plan')
        ]
    },
    {
        'name': 'AI Finance Suite',
        'subtitle': 'Financial Intelligence Platform',
        'features': [
            'Automated financial reporting',
            'AI-driven expense management',
            'Cash flow forecasting',
            'Risk assessment and compliance',
            'Budget optimization algorithms'
        ],
        'prices': [
            ('$10,000', 'Basic Plan'),
            ('$100,000', 'Professional Plan'),
            ('$1,000,000', 'Enterprise Plan')
        ]
    },
    {
        'name': 'AI Supply Chain',
        'subtitle': 'Supply Chain Optimization',
        'features': [
            'Demand forecasting with AI',
            'Inventory optimization',
            'Supplier performance analytics',
            'Predictive maintenance',
            'Logistics route optimization'
        ],
        'prices': [
            ('$10,000', 'Basic Plan'),
            ('$100,000', 'Professional Plan'),
            ('$1,000,000', 'Enterprise Plan')
        ]
    },
    {
        'name': 'AI Project Management',
        'subtitle': 'Project Intelligence Hub',
        'features': [
            'AI-powered resource allocation',
            'Predictive timeline analysis',
            'Risk detection and mitigation',
            'Automated progress tracking',
            'Smart task prioritization'
        ],
        'prices': [
            ('$10,000', 'Basic Plan'),
            ('$100,000', 'Professional Plan'),
            ('$1,000,000', 'Enterprise Plan')
        ]
    },
    {
        'name': 'AI Business Intelligence',
        'subtitle': 'Data Analytics Platform',
        'features': [
            'Automated data visualization',
            'Predictive analytics models',
            'Real-time dashboard creation',
            'Natural language querying',
            'Automated insight generation'
        ],
        'prices': [
            ('$10,000', 'Basic Plan'),
            ('$100,000', 'Professional Plan'),
            ('$1,000,000', 'Enterprise Plan')
        ]
    }
]

# Replace product sections
product_pattern = r'<!-- Product (\d+) -->(.*?)</div></div>'
matches = list(re.finditer(product_pattern, content, re.DOTALL))

for i, match in enumerate(matches):
    if i >= len(products):
        break

    product_num = i + 1
    product_data = products[i]

    # Find the product section
    old_section = match.group(0)

    # Build new product section
    new_section = f'''<!-- Product {product_num} --><div class="product-card"><div class="product-header"><div class="icon">{['👥','👨‍💼','💰','📦','🤝','📊'][i]}</div><h3>{product_data['name']}</h3><p>{product_data['subtitle']}</p></div><div class="product-body"><ul class="product-features">'''

    for feature in product_data['features']:
        new_section += f'<li>{feature}</li>'

    new_section += '</ul><div class="pricing">'

    for price, label in product_data['prices']:
        new_section += f'<div class="pricing-item"><strong>{price}</strong> {label}</div>'

    new_section += f'''</div><button class="product-btn" onclick="window.location.href='payment.html?product=enterpriseai&plan=basic'">Start Free Trial</button></div></div>'''

    # Replace in content
    content = content.replace(old_section, new_section, 1)

# Write back
with open('/Users/liyanmei/WorkBuddy/Claw/enterprise-ai.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Product sections filled successfully!")
