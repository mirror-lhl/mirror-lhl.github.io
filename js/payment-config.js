// 收款账号配置文件
// 请在此处填写您的真实收款信息

const PAYMENT_CONFIG = {
    // 支付宝配置
    alipay: {
        // 收款二维码图片路径
        qrCodePath: 'images/alipay-qr-code.jpg',
        
        // 支付宝账号
        account: 'your-alipay-account@example.com',
        
        // 收款人姓名
        name: '您的姓名',
        
        // 收款提示
        note: '请扫描二维码支付,支付时请备注订单号以便确认'
    },
    
    // 微信支付配置
    wechat: {
        // 收款二维码图片路径
        qrCodePath: 'images/wechat-qr-code.jpg',
        
        // 微信号
        account: 'your-wechat-id',
        
        // 收款人昵称
        name: '您的昵称',
        
        // 收款提示
        note: '请扫描二维码支付,支付时请备注订单号以便确认'
    },
    
    // 通用配置
    general: {
        // 收款确认时间 (毫秒)
        confirmationTimeout: 300000, // 5分钟
        
        // 订单备注前缀
        orderPrefix: 'ORD',
        
        // 是否显示联系方式
        showContact: true,
        
        // 联系方式
        contact: {
            phone: '',
            email: '',
            wechat: ''
        }
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PAYMENT_CONFIG;
}
