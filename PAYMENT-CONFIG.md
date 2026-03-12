# 收款账号配置文件

## 📝 配置说明

这个文件用于配置您的个人收款账号信息。

---

## 支付宝配置

### 方式1: 收款二维码 (推荐 - 最简单)

**如何获取支付宝收款二维码**:
1. 打开支付宝APP
2. 点击"收钱"功能
3. 点击"保存收款码"
4. 将二维码图片保存到项目目录

**配置项**:
```javascript
const ALIPAY_CONFIG = {
    // 收款二维码图片路径
    qrCodePath: 'images/alipay-qr-code.jpg',
    
    // 收款账号 (显示用)
    account: 'your-alipay-account@example.com',
    
    // 收款人姓名 (显示用)
    name: '您的姓名',
    
    // 收款提示
    note: '请扫描二维码支付,支付时备注订单号'
};
```

### 方式2: 支付宝账号信息

**配置项**:
```javascript
const ALIPAY_CONFIG = {
    // 支付宝账号
    account: 'your-alipay-account@example.com',
    
    // 收款人姓名
    name: '您的姓名',
    
    // 手机号 (可选)
    phone: '13800138000',
    
    // 收款备注提示
    note: '转账时请备注订单号'
};
```

---

## 微信支付配置

### 方式1: 收款二维码 (推荐 - 最简单)

**如何获取微信收款二维码**:
1. 打开微信APP
2. 点击"我" → "服务" → "收付款"
3. 点击"二维码收款"
4. 长按保存收款码图片
5. 将二维码图片保存到项目目录

**配置项**:
```javascript
const WECHAT_CONFIG = {
    // 收款二维码图片路径
    qrCodePath: 'images/wechat-qr-code.jpg',
    
    // 微信号 (显示用)
    account: 'your-wechat-id',
    
    // 收款人昵称 (显示用)
    name: '您的昵称',
    
    // 收款提示
    note: '请扫描二维码支付,支付时备注订单号'
};
```

### 方式2: 微信账号信息

**配置项**:
```javascript
const WECHAT_CONFIG = {
    // 微信号
    account: 'your-wechat-id',
    
    // 收款人昵称
    name: '您的昵称',
    
    // 手机号 (可选)
    phone: '13800138000',
    
    // 收款备注提示
    note: '添加好友时请备注订单号'
};
```

---

## 配置步骤

### 第1步: 准备收款二维码

#### 支付宝收款二维码:
1. 打开支付宝APP
2. 点击右上角"收钱"按钮
3. 点击"保存收款码"
4. 将保存的图片重命名为 `alipay-qr-code.jpg`
5. 将图片放入项目的 `images/` 文件夹

#### 微信收款二维码:
1. 打开微信APP
2. 点击"我" → "服务" → "收付款"
3. 点击"二维码收款"
4. 长按保存图片到相册
5. 将保存的图片重命名为 `wechat-qr-code.jpg`
6. 将图片放入项目的 `images/` 文件夹

### 第2步: 更新配置信息

在 `payment-config.js` 文件中填写您的真实信息:

```javascript
const PAYMENT_CONFIG = {
    alipay: {
        qrCodePath: 'images/alipay-qr-code.jpg',
        account: 'your-alipay-account@example.com',
        name: '您的真实姓名',
        note: '请扫描二维码支付,支付时备注订单号'
    },
    wechat: {
        qrCodePath: 'images/wechat-qr-code.jpg',
        account: 'your-wechat-id',
        name: '您的昵称',
        note: '请扫描二维码支付,支付时备注订单号'
    }
};
```

### 第3步: 应用配置

修改 `payment.html` 文件,引入配置并应用:

```html
<!-- 在 <head> 中引入配置文件 -->
<script src="js/payment-config.js"></script>
```

---

## 注意事项

### 安全提示
1. 不要将此文件上传到公开的代码仓库
2. 建议添加到 `.gitignore` 文件
3. 定期检查收款记录
4. 如发现异常,立即停止使用

### 使用建议
1. 在支付页面明确提示用户备注订单号
2. 收到款项后及时确认订单
3. 保存好每一笔交易的截图
4. 建议定期备份数据

### 风险提醒
- 此方式适合小规模收款
- 建议单笔金额不超过¥500
- 如需正式经营,建议申请商家账号
- 如需开发票,需要企业资质

---

## 后续升级

当业务量增长时,可以考虑:

1. **申请商家账号**
   - 支付宝商家版: https://b.alipay.com/
   - 微信支付商户版: https://pay.weixin.qq.com/

2. **接入官方支付接口**
   - 自动化处理订单
   - 实时通知支付状态
   - 支持批量退款
   - 提供交易数据

3. **使用第三方支付平台**
   - 易宝支付: https://www.yeepay.com/
   - Ping++: https://www.pingxx.com/
   - BeeCloud: https://beecloud.cn/

---

## 配置示例

### 示例配置 (请替换为您的真实信息)

```javascript
const PAYMENT_CONFIG = {
    alipay: {
        qrCodePath: 'images/alipay-qr-code.jpg',
        account: 'zhangsan@example.com',
        name: '张三',
        note: '请扫描二维码支付,支付时备注订单号'
    },
    wechat: {
        qrCodePath: 'images/wechat-qr-code.jpg',
        account: 'zhangsan_wx',
        name: '张三',
        note: '请扫描二维码支付,支付时备注订单号'
    }
};
```

---

## 文件位置

```
Claw/
├── payment.html              (支付页面)
├── js/
│   ├── payment-config.js     (收款配置 - 需要创建)
│   └── i18n.js              (多语言配置)
└── images/
    ├── alipay-qr-code.jpg    (支付宝收款码 - 需要添加)
    └── wechat-qr-code.jpg    (微信收款码 - 需要添加)
```

---

## 快速开始

### 立即配置:
1. 准备您的支付宝和微信收款二维码
2. 将二维码图片放入 `images/` 文件夹
3. 复制下面的配置代码到 `js/payment-config.js`
4. 填写您的真实信息
5. 刷新 payment.html 查看效果

---

**配置完成时间**: 约5分钟  
**费用**: 免费  
**风险等级**: 低 (个人收款)

*如有问题,请查看下方的详细配置代码。*
