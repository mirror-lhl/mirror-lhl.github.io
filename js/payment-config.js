// Payment account configuration file
// Please fill in your real payment information here

const PAYMENT_CONFIG = {
    // Alipay configuration
    alipay: {
        // QR code image path
        qrCodePath: 'images/alipay-qr-code.jpg',
        
        // Alipay account
        account: 'your-alipay-account@example.com',
        
        // Payee name
        name: 'Your Name',
        
        // Payment note
        note: 'Please scan the QR code to pay. Include order ID for confirmation'
    },
    
    // WeChat Pay configuration
    wechat: {
        // QR code image path
        qrCodePath: 'images/wechat-qr-code.jpg',
        
        // WeChat ID
        account: 'your-wechat-id',
        
        // Payee nickname
        name: 'Your Nickname',
        
        // Payment note
        note: 'Please scan the QR code to pay. Include order ID for confirmation'
    },
    
    // General configuration
    general: {
        // Payment confirmation timeout (milliseconds)
        confirmationTimeout: 300000, // 5 minutes
        
        // Order prefix
        orderPrefix: 'ORD',
        
        // Show contact information
        showContact: true,
        
        // Contact information
        contact: {
            phone: '',
            email: '',
            wechat: ''
        }
    }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PAYMENT_CONFIG;
}
