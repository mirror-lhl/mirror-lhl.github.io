// Multi-language support library
// 2026-03-12 - English only

const translations = {
    'en': {
        // Common
        'home': 'Home',
        'back': 'Back',
        'save': 'Save',
        'cancel': 'Cancel',
        'confirm': 'Confirm',
        'submit': 'Submit',
        'search': 'Search',
        'loading': 'Loading...',
        'success': 'Success',
        'error': 'Error',
        'warning': 'Warning',
        'copy': 'Copy',
        'copied': 'Copied',
        'delete': 'Delete',
        'edit': 'Edit',
        'close': 'Close',
        
        // 导航
        'nav.features': '功能',
        'nav.pricing': '价格',
        'nav.about': '关于',
        'nav.contact': '联系',
        'nav.login': '登录',
        'nav.register': '注册',
        
        // 按钮
        'btn.start': '开始',
        'btn.generate': '生成',
        'btn.regenerate': '重新生成',
        'btn.try': '试用',
        'btn.subscribe': '订阅',
        'btn.buy': '购买',
        'btn.learn_more': '了解更多',
        
        // 价格
        'price.month': '/月',
        'price.year': '/年',
        'price.free': '免费',
        'price.vip': 'VIP会员',
        
        // AI短视频脚本生成器
        'scriptgen.title': 'AI短视频脚本生成器',
        'scriptgen.subtitle': '30秒生成专业脚本，助力爆款短视频',
        'scriptgen.input_topic': '输入视频主题',
        'scriptgen.placeholder': '例如：如何制作健康的减肥餐、新手学摄影的三个技巧、办公室小技巧...',
        'scriptgen.select_duration': '选择视频时长',
        'scriptgen.select_style': '选择风格',
        'scriptgen.style_funny': '轻松搞笑',
        'scriptgen.style_pro': '专业知识',
        'scriptgen.style_emotion': '情感故事',
        'scriptgen.style_tips': '干货分享',
        'scriptgen.duration_30': '30秒',
        'scriptgen.duration_60': '1分钟',
        'scriptgen.duration_180': '3分钟',
        'scriptgen.btn_generate': '生成脚本',
        'scriptgen.btn_copy': '复制',
        'scriptgen.btn_regenerate': '重新生成',
        'scriptgen.result_title': '生成的脚本',
        'scriptgen.tip': '提示：这个脚本使用了AI生成，可以根据实际情况进行调整优化。如需更专业的脚本定制，请联系我们！',
        'scriptgen.pricing_title': '收费标准',
        'scriptgen.pricing_vip': 'VIP会员：¥10,000/月 无限生成',
        'scriptgen.pricing_per': '/条',
        'scriptgen.pricing_recommended': '推荐',
        'scriptgen.btn_subscribe': '开通VIP会员',
        'scriptgen.alert_input': '请输入视频主题！',
        
        // GEO优化服务
        'geo.title': '本地商家GEO优化服务',
        'geo.subtitle': '提升本地搜索排名，让客户找到你',
        'geo.analyze': '免费诊断',
        'geo.btn_subscribe': '订阅套餐',
        'geo.btn_consult': '咨询我们',
        
        // Freelancer CRM
        'crm.title': 'Freelancer CRM',
        'crm.subtitle': '管理客户、项目和财务，让自由职业更专业',
        'crm.personal': '个人版',
        'crm.team': '团队版',
        
        // AI创作家
        'aicreator.title': 'AI创作家',
        'aicreator.subtitle': '一站式AI内容创作平台，让创作更简单',
        'aicreator.demo_title': '立即体验，免费生成内容',
        'aicreator.tab_copy': 'AI文案生成',
        'aicreator.tab_image': 'AI图片生成',
        'aicreator.input_type': '选择内容类型',
        'aicreator.input_topic': '输入主题或关键词',
        'aicreator.input_style': '内容风格',
        'aicreator.style_professional': '专业',
        'aicreator.style_casual': '轻松',
        'aicreator.style_humorous': '幽默',
        'aicreator.style_emotional': '情感',
        'aicreator.input_prompt': '输入图片描述',
        'aicreator.select_style': '选择风格',
        'aicreator.style_realistic': '写实',
        'aicreator.style_anime': '动漫',
        'aicreator.style_watercolor': '水彩',
        'aicreator.style_oil': '油画',
        'aicreator.style_digital': '数字艺术',
        'aicreator.btn_generate_copy': '开始生成文案',
        'aicreator.btn_generate_image': '开始生成图片',
        'aicreator.generating': '正在生成内容，请稍候...',
        'aicreator.generating_image': '正在生成图片，请稍候...',
        'aicreator.alert_topic': '请输入主题或关键词',
        'aicreator.alert_prompt': '请输入图片描述',
        'aicreator.pricing_title': '灵活定价，满足不同需求',
        'aicreator.plan_free': '免费版',
        'aicreator.plan_basic': '基础版',
        'aicreator.plan_pro': '专业版',
        'aicreator.plan_enterprise': '企业版',
        'aicreator.btn_use': '免费使用',
        'aicreator.btn_subscribe': '立即开通',
        'aicreator.btn_contact': '联系我们',
        'aicreator.testimonials_title': '用户真实反馈',
        'aicreator.faq_title': '常见问题',
        'aicreator.faq_q1': 'AI生成的内容质量如何？',
        'aicreator.faq_a1': '我们使用最先进的AI模型，生成的内容质量非常高。同时提供多种风格和模板选择，满足不同场景需求。您也可以根据需要进行微调。',
        'aicreator.faq_q2': '可以免费试用吗？',
        'aicreator.faq_a2': '当然！我们提供免费版，每日可生成10次文案和5张图片。同时新用户可享受7天专业版免费试用，无需信用卡。',
        'aicreator.faq_q3': '生成的版权归谁所有？',
        'aicreator.faq_a3': '您使用AI创作家生成的内容完全归您所有，可以自由使用和发布。',
        'aicreator.faq_q4': '支持团队使用吗？',
        'aicreator.faq_a4': '支持！专业版和企业版都提供团队协作功能，支持多人同时编辑、评论和版本管理。',
        'aicreator.faq_q5': '可以随时取消订阅吗？',
        'aicreator.faq_a5': '可以，您可以随时取消订阅，不会产生任何额外费用。取消后服务将持续到当前计费周期结束。',
        'aicreator.cta_title': '开始您的AI创作之旅',
        'aicreator.cta_desc': '现在注册，立即免费试用所有功能',
        'aicreator.btn_register': '免费注册',
        'aicreator.footer_product': '产品',
        'aicreator.footer_resources': '资源',
        'aicreator.footer_company': '公司',
        'aicreator.footer_follow': '关注我们',
        'aicreator.nav_features': '功能介绍',
        'aicreator.nav_pricing': '价格方案',
        'aicreator.nav_demo': '在线体验',
        'aicreator.footer_changelog': '更新日志',
        'aicreator.footer_tutorial': '使用教程',
        'aicreator.footer_video': '视频教程',
        'aicreator.footer_help': '帮助中心',
        'aicreator.footer_api': 'API文档',
        'aicreator.footer_about': '关于我们',
        'aicreator.footer_contact': '联系我们',
        'aicreator.footer_join': '加入我们',
        'aicreator.footer_partner': '合作伙伴',
        'aicreator.footer_wechat': '微信公众号',
        'aicreator.footer_zhihu': '知乎专栏',
        'aicreator.footer_bilibili': 'B站',
        'aicreator.footer_weibo': '微博',
        'aicreator.copyright': '© 2026 AI创作家. 保留所有权利.',
        
        // 本地生活服务平台
        'local.title': '生活圈 - 本地生活服务平台',
        'local.subtitle': '连接本地商家和消费者，提供一站式本地生活服务',
        'local.search': '搜索商家、服务或地点',
        'local.all_categories': '全部分类',
        'local.food': '美食餐饮',
        'local.beauty': '美容美发',
        'local.services': '家政服务',
        'local.entertainment': '休闲娱乐',
        'local.fitness': '运动健身',
        'local.auto': '汽车服务',
        'local.health': '医疗健康',
        'local.education': '教育培训',
        'local.categories_title': '热门服务分类',
        'local.merchants_title': '精选优质商家',
        'local.merchant_login': '商家登录',
        'local.merchant_join': '立即入驻',
        'local.free_join': '立即免费入驻',
        'local.hero_title': '发现身边的美好生活',
        'local.hero_desc': '连接本地商家和消费者，提供一站式本地生活服务',
        'local.btn_explore': '探索服务',
        'local.btn_merchant_join': '商家入驻',
        'local.search_btn': '搜索',
        'local.stats_merchants': '入驻商家',
        'local.stats_users': '活跃用户',
        'local.stats_orders': '完成订单',
        'local.stats_cities': '覆盖城市',
        'local.merchant_cta_title': '商家免费入驻，开启财富之路',
        'local.merchant_cta_desc': '低佣金、高流量、精准用户，让生意更简单',
        'local.benefit_low_commission': '低佣金',
        'local.benefit_low_commission_desc': '比其他平台低30-50%',
        'local.benefit_traffic': '精准流量',
        'local.benefit_traffic_desc': '基于地理位置推荐',
        'local.benefit_analytics': '数据分析',
        'local.benefit_analytics_desc': '实时掌握经营数据',
        'local.benefit_marketing': '营销工具',
        'local.benefit_marketing_desc': '多种促销活动支持',
        'local.how_title': '如何使用',
        'local.step1_title': '搜索服务',
        'local.step1_desc': '在首页搜索框输入您需要的服务或商家，选择分类',
        'local.step2_title': '浏览选择',
        'local.step2_desc': '浏览商家详情，查看评价、价格和优惠活动',
        'local.step3_title': '在线预订',
        'local.step3_desc': '选择服务时间和数量，提交订单并支付',
        'local.step4_title': '享受服务',
        'local.step4_desc': '按预约时间到店享受服务，完成后评价',
        'local.footer_about': '关于我们',
        'local.footer_about_company': '公司介绍',
        'local.footer_history': '发展历程',
        'local.footer_join': '加入我们',
        'local.footer_contact': '联系方式',
        'local.footer_merchant_service': '商家服务',
        'local.footer_merchant_center': '商家中心',
        'local.footer_promotion': '营销推广',
        'local.footer_help': '帮助中心',
        'local.footer_user_service': '用户服务',
        'local.footer_guide': '使用指南',
        'local.footer_faq': '常见问题',
        'local.footer_support': '客服中心',
        'local.footer_feedback': '意见反馈',
        'local.footer_follow': '关注我们',
        'local.footer_wechat': '微信公众号',
        'local.footer_weibo': '微博',
        'local.footer_douyin': '抖音',
        'local.footer_xiaohongshu': '小红书',
        'local.copyright': '© 2026 生活圈. 保留所有权利.',
        
        // AI企业服务矩阵
        'enterprise.title': '企业智脑 - AI企业服务矩阵',
        'enterprise.subtitle': '6大产品矩阵，一站式解决中小企业数字化转型需求',
        'enterprise.products': '产品矩阵',
        'enterprise.products_subtitle': '6大核心产品，覆盖企业全场景需求',
        'enterprise.btn_try': '免费试用14天',
        'enterprise.btn_trial': '立即试用',
        'enterprise.btn_demo': '预约演示',
        'enterprise.hero_title': 'AI驱动的一体化企业服务',
        'enterprise.hero_desc': '6大产品矩阵，一站式解决中小企业数字化转型需求',
        'enterprise.btn_explore': '探索产品',
        'enterprise.benefits_title': '核心优势',
        'enterprise.benefits_subtitle': '为什么选择企业智脑？',
        'enterprise.benefit_ai': 'AI驱动',
        'enterprise.benefit_ai_desc': '所有产品都集成AI能力，提供智能化服务，让决策更精准',
        'enterprise.benefit_integrated': '一体化方案',
        'enterprise.benefit_integrated_desc': '6个产品无缝集成，企业只需一个供应商，降低管理成本',
        'enterprise.benefit_industry': '行业模板',
        'enterprise.benefit_industry_desc': '提供零售、制造、服务等行业预配置模板，快速上线',
        'enterprise.benefit_value': '高性价比',
        'enterprise.benefit_value_desc': '价格比传统企业软件低50-70%，让中小企业也能用上好系统',
        'enterprise.benefit_deploy': '快速部署',
        'enterprise.benefit_deploy_desc': 'SaaS模式，开箱即用，无需IT团队，3天即可上线',
        'enterprise.benefit_security': '安全可靠',
        'enterprise.benefit_security_desc': '企业级安全保障，数据加密，定期备份，SLA保障',
        'enterprise.stat_products': '核心产品',
        'enterprise.stat_customers': '企业客户',
        'enterprise.stat_uptime': '系统可用性',
        'enterprise.stat_support': '技术支持',
        'enterprise.cta_title': '开启企业数字化转型之旅',
        'enterprise.cta_desc': '14天免费试用，无需信用卡，全功能体验',
        'enterprise.footer_product': '产品',
        'enterprise.footer_support': '支持',
        'enterprise.footer_company': '公司',
        'enterprise.footer_contact': '联系方式',
        'enterprise.footer_help': '帮助中心',
        'enterprise.footer_tutorial': '视频教程',
        'enterprise.footer_api': 'API文档',
        'enterprise.footer_status': '系统状态',
        'enterprise.footer_about': '关于我们',
        'enterprise.footer_cases': '客户案例',
        'enterprise.footer_partner': '合作伙伴',
        'enterprise.footer_contact_us': '联系我们',
        'enterprise.copyright': '© 2026 企业智脑. 保留所有权利.',
        
        // 首页
        'index.title': '1000亿创业计划 - 项目展示',
        'index.subtitle': '10年时间，从0到1000亿的创业之路',
        'index.projects': '已启动项目',
        'index.planning': '规划中项目',
        'index.revenue': '累计收入（元）',
        'index.years': '年时间',
        'index.status_launched': '已启动项目',
        'index.revenue_progress': '收入目标进度',
        'index.total_target': '1000亿总目标',
        'index.development_timeline': '发展时间线',
        'index.year_1': '第1年',
        'index.year_2_3': '第2-3年',
        'index.year_4_6': '第4-6年',
        'index.year_7_10': '第7-10年',
        'index.phase_validation': '验证期 - 目标100万',
        'index.phase_validation_desc': '启动6个MVP，建立现金流，验证商业模式',
        'index.phase_scale': '规模化 - 目标1000万',
        'index.phase_scale_desc': 'SaaS产品上线，扩大团队，多城市布局',
        'index.phase_platform': '平台化 - 目标1亿',
        'index.phase_platform_desc': '平台生态建设，用户突破100万，准备上市',
        'index.phase_monopoly': '垄断化 - 目标1000亿',
        'index.phase_monopoly_desc': '行业领导者，海外扩张，资本运作',
        'index.footer_text': '© 2026 1000亿创业计划 | 每一天都在向目标迈进 💪',
        
        // 支付
        'payment.title': '收银台',
        'payment.subtitle': '请选择支付方式完成订单',
        'payment.order_info': '订单信息',
        'payment.product_name': '商品名称',
        'payment.order_id': '订单编号',
        'payment.amount': '订单金额',
        'payment.select_method': '选择支付方式',
        'payment.alipay': '支付宝',
        'payment.alipay_desc': '推荐使用支付宝支付，安全快捷',
        'payment.wechat': '微信支付',
        'payment.wechat_desc': '使用微信支付，便捷高效',
        'payment.btn_pay': '立即支付',
        'payment.processing': '处理中...',
        'payment.security_title': '安全支付保障',
        'payment.security_tip1': '支付过程全程加密，保障您的资金安全',
        'payment.security_tip2': '我们采用支付宝/微信官方支付接口',
        'payment.security_tip3': '如遇支付问题请联系客服：400-888-8888',
        'payment.success_title': '支付成功！',
        'payment.success_desc': '感谢您的购买，订单已成功支付',
        'payment.order_details': '订单详情',
        'payment.btn_back': '返回首页',
        'payment.qr_title': '扫码支付',
        'payment.qr_desc': '请使用手机扫描二维码完成支付',
        'payment.qr_loading': '二维码加载中...',
        'payment.waiting': '等待支付...',
        'payment.check_status': '检查支付状态',
        'payment.cancel': '取消支付',

        // 加入我们
        'join.title': '🚀 Claw 创业合伙人计划',
        'join.subtitle': '加入我们，共享千亿市场红利，实现财富自由！',
        'join.stat_target': '10年收入目标',
        'join.stat_projects': '核心项目矩阵',
        'join.stat_commission': '最高返佣比例',
        'join.stat_unlimited': '收益上限',
        'join.commission_title': '💰 超高返佣制度',
        'join.commission_desc': '我们提供行业领先的返佣比例，你的贡献，我们共同分享！',
        'join.commission_table_sales': '销售业绩',
        'join.commission_table_rate': '返佣比例',
        'join.commission_table_earning': '你的收益',
        'join.commission_tip': '* 高亮区域为重点推荐目标，达成这些目标将获得丰厚回报！',
        'join.benefit_high': '超高返佣',
        'join.benefit_fast': '快速启动',
        'join.benefit_support': '全程支持',
        'join.benefit_data': '数据透明',
        'join.benefit_products': '多元产品',
        'join.benefit_longterm': '长期合作',
        'join.how_title': '📋 如何开始',
        'join.step1': '申请加入',
        'join.step1_desc': '填写申请表单，提交你的基本信息',
        'join.step2': '审核通过',
        'join.step2_desc': '我们审核你的申请，确认合作关系',
        'join.step3': '培训赋能',
        'join.step3_desc': '接受专业培训，学习产品知识和销售技巧',
        'join.step4': '开始赚钱',
        'join.step4_desc': '推广产品，获取客户，享受高额返佣',
        'join.calculator_title': '🧮 收益计算器',
        'join.calculator_desc': '输入你的预期销售业绩，立即查看你的收益',
        'join.calculator_input': '销售业绩 (¥)',
        'join.calculator_placeholder': '例如: 5000000',
        'join.calculator_btn': '计算我的收益',
        'join.result_title': '🎉 你的收益分析',
        'join.result_sales': '销售业绩:',
        'join.result_rate': '返佣比例:',
        'join.result_earning': '你的收益:',
        'join.result_monthly': '月均收入:',
        'join.cta_title': '🎯 准备好开始了吗？',
        'join.cta_desc': '立即加入Claw创业合伙人计划，开启你的财富自由之旅！',
        'join.cta_btn': '立即申请加入',
        'join.footer_text': '© 2026 Claw 创业合伙人计划 - 共创共享，共赢未来',
        'join.payment_title': '💳 付款返佣说明',
        'join.payment_important': '重要提示',
        'join.payment_important_desc': '为了确保您的返佣能准确到账,请务必在付款时填写正确的信息!',
        'join.payment_format_title': '付款备注格式',
        'join.payment_format': '佣金收款人姓名 + 账号',
        'join.payment_example': '示例: 张三 6222021234567890',
        'join.payment_why_title': '为什么需要填写?',
        'join.payment_why_desc': '系统需要通过备注信息识别对应的合伙人,才能准确发放返佣。信息错误可能导致返佣失败或延迟。',
        'join.payment_notice_title': '注意事项',
        'join.payment_notice_1': '请确保收款人姓名与合伙人注册姓名一致',
        'join.payment_notice_2': '银行卡号请仔细核对,避免输入错误',
        'join.payment_notice_3': '微信/支付宝账号请提供准确的微信号/支付宝账号',
        'join.payment_notice_4': '备注信息将在支付完成后7个工作日内处理',
    },
    
    'en': {
        // 通用
        'home': 'Home',
        'back': 'Back',
        'save': 'Save',
        'cancel': 'Cancel',
        'confirm': 'Confirm',
        'submit': 'Submit',
        'search': 'Search',
        'loading': 'Loading...',
        'success': 'Success',
        'error': 'Error',
        'warning': 'Warning',
        'copy': 'Copy',
        'copied': 'Copied',
        'delete': 'Delete',
        'edit': 'Edit',
        'close': 'Close',
        
        // 导航
        'nav.features': 'Features',
        'nav.pricing': 'Pricing',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.login': 'Login',
        'nav.register': 'Register',
        
        // 按钮
        'btn.start': 'Start',
        'btn.generate': 'Generate',
        'btn.regenerate': 'Regenerate',
        'btn.try': 'Try',
        'btn.subscribe': 'Subscribe',
        'btn.buy': 'Buy',
        'btn.learn_more': 'Learn More',
        
        // 价格
        'price.month': '/month',
        'price.year': '/year',
        'price.free': 'Free',
        'price.vip': 'VIP Member',
        
        // AI短视频脚本生成器
        'scriptgen.title': 'AI Short Video Script Generator',
        'scriptgen.subtitle': 'Generate professional scripts in 30 seconds',
        'scriptgen.input_topic': 'Enter Video Topic',
        'scriptgen.placeholder': 'e.g., How to make healthy weight loss meals, 3 photography tips for beginners, office hacks...',
        'scriptgen.select_duration': 'Select Video Duration',
        'scriptgen.select_style': 'Select Style',
        'scriptgen.style_funny': 'Funny',
        'scriptgen.style_pro': 'Professional',
        'scriptgen.style_emotion': 'Emotional Story',
        'scriptgen.style_tips': 'Tips Sharing',
        'scriptgen.duration_30': '30s',
        'scriptgen.duration_60': '1min',
        'scriptgen.duration_180': '3min',
        'scriptgen.btn_generate': 'Generate Script',
        'scriptgen.btn_copy': 'Copy',
        'scriptgen.btn_regenerate': 'Regenerate',
        'scriptgen.result_title': 'Generated Script',
        'scriptgen.tip': 'Tip: This script is AI-generated and can be adjusted based on actual needs. Contact us for professional customization!',
        'scriptgen.pricing_title': 'Pricing',
        'scriptgen.pricing_vip': 'VIP: ¥10,000/month, Unlimited Generation',
        'scriptgen.pricing_per': '/script',
        'scriptgen.pricing_recommended': 'Recommended',
        'scriptgen.btn_subscribe': 'Subscribe to VIP',
        'scriptgen.alert_input': 'Please enter a video topic!',
        
        // GEO优化服务
        'geo.title': 'Local Business GEO Optimization',
        'geo.subtitle': 'Boost local search ranking, get found by customers',
        'geo.analyze': 'Free Diagnosis',
        'geo.btn_subscribe': 'Subscribe to Plan',
        'geo.btn_consult': 'Contact Us',
        
        // Freelancer CRM
        'crm.title': 'Freelancer CRM',
        'crm.subtitle': 'Manage clients, projects and finances like a pro',
        'crm.personal': 'Personal',
        'crm.team': 'Team',
        
        // AI创作家
        'aicreator.title': 'AI Creator',
        'aicreator.subtitle': 'One-stop AI content creation platform',
        'aicreator.demo_title': 'Try Now - Generate Content for Free',
        'aicreator.tab_copy': 'AI Copywriting',
        'aicreator.tab_image': 'AI Image Generation',
        'aicreator.input_type': 'Select Content Type',
        'aicreator.input_topic': 'Enter Topic or Keywords',
        'aicreator.input_style': 'Content Style',
        'aicreator.style_professional': 'Professional',
        'aicreator.style_casual': 'Casual',
        'aicreator.style_humorous': 'Humorous',
        'aicreator.style_emotional': 'Emotional',
        'aicreator.input_prompt': 'Enter Image Description',
        'aicreator.select_style': 'Select Style',
        'aicreator.style_realistic': 'Realistic',
        'aicreator.style_anime': 'Anime',
        'aicreator.style_watercolor': 'Watercolor',
        'aicreator.style_oil': 'Oil Painting',
        'aicreator.style_digital': 'Digital Art',
        'aicreator.btn_generate_copy': 'Generate Copy',
        'aicreator.btn_generate_image': 'Generate Image',
        'aicreator.generating': 'Generating content, please wait...',
        'aicreator.generating_image': 'Generating image, please wait...',
        'aicreator.alert_topic': 'Please enter a topic or keywords',
        'aicreator.alert_prompt': 'Please enter an image description',
        'aicreator.pricing_title': 'Flexible Pricing for All Needs',
        'aicreator.plan_free': 'Free',
        'aicreator.plan_basic': 'Basic',
        'aicreator.plan_pro': 'Professional',
        'aicreator.plan_enterprise': 'Enterprise',
        'aicreator.btn_use': 'Use Free',
        'aicreator.btn_subscribe': 'Subscribe Now',
        'aicreator.btn_contact': 'Contact Us',
        'aicreator.testimonials_title': 'User Testimonials',
        'aicreator.faq_title': 'FAQ',
        'aicreator.faq_q1': 'How good is the AI-generated content?',
        'aicreator.faq_a1': 'We use the most advanced AI models to generate high-quality content. Multiple styles and templates are available to meet different needs. You can also fine-tune as needed.',
        'aicreator.faq_q2': 'Is there a free trial?',
        'aicreator.faq_a2': 'Absolutely! We offer a free plan with 10 copy generations and 5 image generations per day. New users also get 7 days of free Professional trial, no credit card required.',
        'aicreator.faq_q3': 'Who owns the generated content?',
        'aicreator.faq_a3': 'You fully own all content generated with AI Creator and can use and publish it freely.',
        'aicreator.faq_q4': 'Is team use supported?',
        'aicreator.faq_a4': 'Yes! Professional and Enterprise plans both offer team collaboration features, supporting simultaneous editing, comments, and version management.',
        'aicreator.faq_q5': 'Can I cancel anytime?',
        'aicreator.faq_a5': 'Yes, you can cancel anytime without additional fees. Service will continue until the end of the current billing cycle.',
        'aicreator.cta_title': 'Start Your AI Creative Journey',
        'aicreator.cta_desc': 'Sign up now and try all features for free',
        'aicreator.btn_register': 'Register Free',
        'aicreator.footer_product': 'Product',
        'aicreator.footer_resources': 'Resources',
        'aicreator.footer_company': 'Company',
        'aicreator.footer_follow': 'Follow Us',
        'aicreator.nav_features': 'Features',
        'aicreator.nav_pricing': 'Pricing',
        'aicreator.nav_demo': 'Try Now',
        'aicreator.footer_changelog': 'Changelog',
        'aicreator.footer_tutorial': 'Tutorials',
        'aicreator.footer_video': 'Video Tutorials',
        'aicreator.footer_help': 'Help Center',
        'aicreator.footer_api': 'API Docs',
        'aicreator.footer_about': 'About Us',
        'aicreator.footer_contact': 'Contact',
        'aicreator.footer_join': 'Join Us',
        'aicreator.footer_partner': 'Partners',
        'aicreator.footer_wechat': 'WeChat',
        'aicreator.footer_zhihu': 'Zhihu',
        'aicreator.footer_bilibili': 'Bilibili',
        'aicreator.footer_weibo': 'Weibo',
        'aicreator.copyright': '© 2026 AI Creator. All rights reserved.',
        
        // 本地生活服务平台
        'local.title': 'LifeCircle - Local Services Platform',
        'local.subtitle': 'Connecting local businesses and consumers',
        'local.search': 'Search merchants, services or locations',
        'local.all_categories': 'All Categories',
        'local.food': 'Food & Dining',
        'local.beauty': 'Beauty & Hair',
        'local.services': 'Home Services',
        'local.entertainment': 'Entertainment',
        'local.fitness': 'Fitness',
        'local.auto': 'Auto Services',
        'local.health': 'Health & Medical',
        'local.education': 'Education & Training',
        'local.categories_title': 'Popular Categories',
        'local.merchants_title': 'Featured Merchants',
        'local.merchant_login': 'Merchant Login',
        'local.merchant_join': 'Join Now',
        'local.free_join': 'Join for Free',
        'local.hero_title': 'Discover the Good Life Around You',
        'local.hero_desc': 'Connecting local businesses and consumers',
        'local.btn_explore': 'Explore Services',
        'local.btn_merchant_join': 'Merchant Join',
        'local.search_btn': 'Search',
        'local.stats_merchants': 'Merchants',
        'local.stats_users': 'Active Users',
        'local.stats_orders': 'Completed Orders',
        'local.stats_cities': 'Cities Covered',
        'local.merchant_cta_title': 'Join Free - Start Your Business Journey',
        'local.merchant_cta_desc': 'Low commission, high traffic, targeted users',
        'local.benefit_low_commission': 'Low Commission',
        'local.benefit_low_commission_desc': '30-50% lower than other platforms',
        'local.benefit_traffic': 'Targeted Traffic',
        'local.benefit_traffic_desc': 'Location-based recommendations',
        'local.benefit_analytics': 'Data Analytics',
        'local.benefit_analytics_desc': 'Real-time business data',
        'local.benefit_marketing': 'Marketing Tools',
        'local.benefit_marketing_desc': 'Multiple promotional campaign support',
        'local.how_title': 'How It Works',
        'local.step1_title': 'Search Services',
        'local.step1_desc': 'Search for services or merchants on the homepage',
        'local.step2_title': 'Browse & Choose',
        'local.step2_desc': 'View merchant details, reviews, prices and offers',
        'local.step3_title': 'Book Online',
        'local.step3_desc': 'Select service time and quantity, submit order and pay',
        'local.step4_title': 'Enjoy Service',
        'local.step4_desc': 'Visit the store as scheduled and leave a review',
        'local.footer_about': 'About Us',
        'local.footer_about_company': 'Company Info',
        'local.footer_history': 'History',
        'local.footer_join': 'Join Us',
        'local.footer_contact': 'Contact',
        'local.footer_merchant_service': 'Merchant Services',
        'local.footer_merchant_center': 'Merchant Center',
        'local.footer_promotion': 'Marketing',
        'local.footer_help': 'Help Center',
        'local.footer_user_service': 'User Services',
        'local.footer_guide': 'User Guide',
        'local.footer_faq': 'FAQ',
        'local.footer_support': 'Customer Support',
        'local.footer_feedback': 'Feedback',
        'local.footer_follow': 'Follow Us',
        'local.footer_wechat': 'WeChat',
        'local.footer_weibo': 'Weibo',
        'local.footer_douyin': 'Douyin',
        'local.footer_xiaohongshu': 'Xiaohongshu',
        'local.copyright': '© 2026 LifeCircle. All rights reserved.',
        
        // AI企业服务矩阵
        'enterprise.title': 'Enterprise Brain - AI Business Suite',
        'enterprise.subtitle': '6-product matrix for SME digital transformation',
        'enterprise.products': 'Product Matrix',
        'enterprise.products_subtitle': '6 core products covering all business scenarios',
        'enterprise.btn_try': 'Try Free for 14 Days',
        'enterprise.btn_trial': 'Start Free Trial',
        'enterprise.btn_demo': 'Book Demo',
        'enterprise.hero_title': 'AI-Driven Integrated Business Services',
        'enterprise.hero_desc': '6-product matrix for SME digital transformation',
        'enterprise.btn_explore': 'Explore Products',
        'enterprise.benefits_title': 'Core Advantages',
        'enterprise.benefits_subtitle': 'Why Choose Enterprise Brain?',
        'enterprise.benefit_ai': 'AI-Powered',
        'enterprise.benefit_ai_desc': 'All products integrated with AI capabilities for intelligent decisions',
        'enterprise.benefit_integrated': 'Integrated Solution',
        'enterprise.benefit_integrated_desc': '6 products seamlessly integrated, one vendor, lower management costs',
        'enterprise.benefit_industry': 'Industry Templates',
        'enterprise.benefit_industry_desc': 'Pre-configured templates for retail, manufacturing, services and more',
        'enterprise.benefit_value': 'High Value',
        'enterprise.benefit_value_desc': '50-70% lower than traditional enterprise software',
        'enterprise.benefit_deploy': 'Fast Deployment',
        'enterprise.benefit_deploy_desc': 'SaaS mode, ready-to-use, no IT team needed, go live in 3 days',
        'enterprise.benefit_security': 'Secure & Reliable',
        'enterprise.benefit_security_desc': 'Enterprise-grade security, data encryption, regular backups, SLA guarantee',
        'enterprise.stat_products': 'Core Products',
        'enterprise.stat_customers': 'Enterprise Clients',
        'enterprise.stat_uptime': 'System Uptime',
        'enterprise.stat_support': 'Technical Support',
        'enterprise.cta_title': 'Start Your Digital Transformation Journey',
        'enterprise.cta_desc': '14-day free trial, no credit card required',
        'enterprise.footer_product': 'Products',
        'enterprise.footer_support': 'Support',
        'enterprise.footer_company': 'Company',
        'enterprise.footer_contact': 'Contact',
        'enterprise.footer_help': 'Help Center',
        'enterprise.footer_tutorial': 'Video Tutorials',
        'enterprise.footer_api': 'API Docs',
        'enterprise.footer_status': 'System Status',
        'enterprise.footer_about': 'About Us',
        'enterprise.footer_cases': 'Case Studies',
        'enterprise.footer_partner': 'Partners',
        'enterprise.footer_contact_us': 'Contact Us',
        'enterprise.copyright': '© 2026 Enterprise Brain. All rights reserved.',
        
        // 首页
        'index.title': '100 Billion Startup Plan - Project Showcase',
        'index.subtitle': '10-year journey from 0 to 100 billion',
        'index.projects': 'Launched Projects',
        'index.planning': 'Planning Projects',
        'index.revenue': 'Total Revenue (CNY)',
        'index.years': 'Years',
        'index.status_launched': 'Launched Projects',
        'index.revenue_progress': 'Revenue Progress',
        'index.total_target': '100 Billion Total Goal',
        'index.development_timeline': 'Development Timeline',
        'index.year_1': 'Year 1',
        'index.year_2_3': 'Years 2-3',
        'index.year_4_6': 'Years 4-6',
        'index.year_7_10': 'Years 7-10',
        'index.phase_validation': 'Validation - Target 1M',
        'index.phase_validation_desc': 'Launch 6 MVPs, build cash flow, validate business model',
        'index.phase_scale': 'Scaling - Target 10M',
        'index.phase_scale_desc': 'SaaS product launch, expand team, multi-city expansion',
        'index.phase_platform': 'Platformization - Target 100M',
        'index.phase_platform_desc': 'Platform ecosystem, 1M users, prepare for IPO',
        'index.phase_monopoly': 'Monopolization - Target 100B',
        'index.phase_monopoly_desc': 'Industry leadership, overseas expansion, capital operations',
        'index.footer_text': '© 2026 100 Billion Startup Plan | Moving toward goal every day 💪',
        
        // 支付
        'payment.title': 'Checkout',
        'payment.subtitle': 'Select payment method to complete your order',
        'payment.order_info': 'Order Information',
        'payment.product_name': 'Product Name',
        'payment.order_id': 'Order ID',
        'payment.amount': 'Order Amount',
        'payment.select_method': 'Select Payment Method',
        'payment.alipay': 'Alipay',
        'payment.alipay_desc': 'Use Alipay for secure and fast payment',
        'payment.wechat': 'WeChat Pay',
        'payment.wechat_desc': 'Use WeChat Pay for convenient payment',
        'payment.btn_pay': 'Pay Now',
        'payment.processing': 'Processing...',
        'payment.security_title': 'Secure Payment',
        'payment.security_tip1': 'Payment process is fully encrypted to protect your funds',
        'payment.security_tip2': 'We use official Alipay/WeChat payment interfaces',
        'payment.security_tip3': 'Contact support for payment issues: 400-888-8888',
        'payment.success_title': 'Payment Successful!',
        'payment.success_desc': 'Thank you for your purchase',
        'payment.order_details': 'Order Details',
        'payment.btn_back': 'Back to Home',
        'payment.qr_title': 'Scan to Pay',
        'payment.qr_desc': 'Scan QR code with your phone to complete payment',
        'payment.qr_loading': 'QR code loading...',
        'payment.waiting': 'Waiting for payment...',
        'payment.check_status': 'Check Status',
        'payment.cancel': 'Cancel',

        // Join Us
        'join.title': '🚀 Claw Partner Program',
        'join.subtitle': 'Join us and share in the 100 billion market opportunity!',
        'join.stat_target': '10-Year Goal',
        'join.stat_projects': 'Core Projects',
        'join.stat_commission': 'Max Commission',
        'join.stat_unlimited': 'Unlimited',
        'join.commission_title': '💰 Super High Commission',
        'join.commission_desc': 'We offer industry-leading commission rates. Your contribution, our shared success!',
        'join.commission_table_sales': 'Sales Performance',
        'join.commission_table_rate': 'Commission Rate',
        'join.commission_table_earning': 'Your Earnings',
        'join.commission_tip': '* Highlighted areas are recommended targets with generous rewards!',
        'join.benefit_high': 'High Commission',
        'join.benefit_fast': 'Quick Start',
        'join.benefit_support': 'Full Support',
        'join.benefit_data': 'Transparent Data',
        'join.benefit_products': 'Diverse Products',
        'join.benefit_longterm': 'Long-term Partnership',
        'join.how_title': '📋 How to Start',
        'join.step1': 'Apply to Join',
        'join.step1_desc': 'Fill out the application form with your basic information',
        'join.step2': 'Approval',
        'join.step2_desc': 'We review your application and confirm the partnership',
        'join.step3': 'Training',
        'join.step3_desc': 'Receive professional training on products and sales techniques',
        'join.step4': 'Start Earning',
        'join.step4_desc': 'Promote products, acquire customers, and enjoy high commissions',
        'join.calculator_title': '🧮 Earnings Calculator',
        'join.calculator_desc': 'Enter your expected sales to see your potential earnings',
        'join.calculator_input': 'Sales Performance (¥)',
        'join.calculator_placeholder': 'e.g.: 5000000',
        'join.calculator_btn': 'Calculate My Earnings',
        'join.result_title': '🎉 Your Earnings Analysis',
        'join.result_sales': 'Sales Performance:',
        'join.result_rate': 'Commission Rate:',
        'join.result_earning': 'Your Earnings:',
        'join.result_monthly': 'Monthly Income:',
        'join.cta_title': '🎯 Ready to Start?',
        'join.cta_desc': 'Join the Claw Partner Program and start your journey to financial freedom!',
        'join.cta_btn': 'Apply Now',
        'join.footer_text': '© 2026 Claw Partner Program - Creating Together, Sharing Success',
        'join.payment_title': '💳 Payment Commission Instructions',
        'join.payment_important': 'Important Note',
        'join.payment_important_desc': 'To ensure your commission is accurately credited, please provide correct information when making payment!',
        'join.payment_format_title': 'Payment Memo Format',
        'join.payment_format': 'Commission Recipient Name + Account',
        'join.payment_example': 'Example: Zhang San 6222021234567890',
        'join.payment_why_title': 'Why is this required?',
        'join.payment_why_desc': 'The system needs to identify the corresponding partner through memo information to accurately issue commission. Incorrect information may lead to commission failure or delay.',
        'join.payment_notice_title': 'Important Notes',
        'join.payment_notice_1': 'Please ensure recipient name matches registered partner name',
        'join.payment_notice_2': 'Please carefully verify bank card number to avoid errors',
        'join.payment_notice_3': 'Please provide accurate WeChat/Alipay account for WeChat/Alipay payments',
        'join.payment_notice_4': 'Memo information will be processed within 7 working days after payment completion',
    }
};

// Current language setting
let currentLang = 'en';

// Initialize language
function initLanguage() {
    // Get language parameter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    
    // 从localStorage获取语言
    const savedLang = localStorage.getItem('language');
    
    // 设置当前语言
    if (langParam) {
        currentLang = langParam;
    } else if (savedLang) {
        currentLang = savedLang;
    } else {
        // 根据浏览器语言自动检测
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang && browserLang.startsWith('en')) {
            currentLang = 'en';
        }
    }
    
    // 保存语言设置
    localStorage.setItem('language', currentLang);
    
    // 更新页面语言
    updatePageLanguage();
    
    // 添加语言切换按钮
    addLanguageSwitcher();
}

// 更新页面语言
function updatePageLanguage() {
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const text = translations[currentLang][key];
        if (text) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        }
    });

    // 更新所有带有 data-i18n-placeholder 属性的元素的 placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const text = translations[currentLang][key];
        if (text) {
            element.placeholder = text;
        }
    });

    // 切换 .zh 和 .en 类的显示状态
    document.querySelectorAll('.zh').forEach(el => {
        el.classList.toggle('hidden', currentLang === 'en');
    });
    document.querySelectorAll('.en').forEach(el => {
        el.classList.toggle('hidden', currentLang !== 'en');
    });

    // 更新html lang属性
    document.documentElement.lang = currentLang;
}

// 切换语言
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', currentLang);
    updatePageLanguage();
    
    // 更新URL参数
    const url = new URL(window.location.href);
    url.searchParams.set('lang', currentLang);
    window.history.replaceState({}, '', url);
    
    // 更新语言切换按钮状态
    updateLanguageSwitcher();
}

// 添加语言切换按钮
function addLanguageSwitcher() {
    // 检查是否已存在
    if (document.getElementById('langSwitcher')) return;
    
    const switcher = document.createElement('div');
    switcher.id = 'langSwitcher';
    switcher.className = 'fixed top-4 right-4 z-50 flex items-center gap-2 bg-white rounded-lg shadow-lg p-1';
    switcher.innerHTML = `
        <button onclick="switchLanguage('zh-CN')" class="lang-btn px-3 py-1 rounded-md text-sm font-medium transition-all ${currentLang === 'zh-CN' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}">
            中文
        </button>
        <button onclick="switchLanguage('en')" class="lang-btn px-3 py-1 rounded-md text-sm font-medium transition-all ${currentLang === 'en' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}">
            EN
        </button>
    `;
    
    document.body.appendChild(switcher);
}

// 更新语言切换按钮状态
function updateLanguageSwitcher() {
    const switcher = document.getElementById('langSwitcher');
    if (!switcher) return;
    
    const buttons = switcher.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        const lang = btn.onclick.toString().includes('zh-CN') ? 'zh-CN' : 'en';
        if (lang === currentLang) {
            btn.className = 'lang-btn px-3 py-1 rounded-md text-sm font-medium transition-all bg-blue-500 text-white';
        } else {
            btn.className = 'lang-btn px-3 py-1 rounded-md text-sm font-medium transition-all text-gray-600 hover:bg-gray-100';
        }
    });
}

// 获取翻译文本
function t(key) {
    return translations[currentLang][key] || key;
}

// 页面加载时初始化语言
document.addEventListener('DOMContentLoaded', initLanguage);
