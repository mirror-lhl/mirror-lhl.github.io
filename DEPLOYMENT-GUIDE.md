# 项目部署指南

## 概述

本指南提供了将 1000亿创业计划的所有项目部署到生产环境的完整步骤和最佳实践。

**项目数量**: 6个产品页面 + 1个首页 + 1个支付页面
**推荐平台**: Vercel / Netlify / CloudFlare Pages
**预计部署时间**: 15-30 分钟

---

## 🎯 部署平台对比

### Vercel (推荐)

**优点**:
- ✅ 零配置部署
- ✅ 自动 HTTPS
- ✅ 全球 CDN
- ✅ 预览环境
- ✅ 边缘函数支持
- ✅ 免费额度充足

**缺点**:
- ⚠️ 构建时间限制(免费版)
- ⚠️ 带宽限制

**适用场景**: 静态网站、React/Vue 应用

**免费额度**:
- 100GB 带宽/月
- 无限部署
- 6 小时构建时间/月

**定价**: $20/月起(Pro)

---

### Netlify

**优点**:
- ✅ 简单的拖放部署
- ✅ 自动 HTTPS
- ✅ 表单处理
- ✅ 函数支持
- ✅ 部署钩子

**缺点**:
- ⚠️ 构建队列延迟
- ⚠️ 较少边缘计算功能

**适用场景**: 静态网站、JAMstack 应用

**免费额度**:
- 100GB 带宽/月
- 300 分钟构建时间/月
- 无限站点

**定价**: $19/月起(Pro)

---

### CloudFlare Pages

**优点**:
- ✅ 全球最快的 CDN
- ✅ 免费无限带宽
- ✅ DDoS 保护
- ✅ 0 配置部署
- ✅ 边缘函数

**缺点**:
- ⚠️ 相对较新
- ⚠️ 较少集成选项

**适用场景**: 静态网站、需要无限带宽

**免费额度**:
- 无限带宽
- 无限请求
- 无限构建

**定价**: $20/月起(Pro)

---

## 📋 部署前检查清单

### 代码检查
- [ ] 所有文件已提交到 Git
- [ ] 移除 console.log 和调试代码
- [ ] 环境变量已配置
- [ ] 相对路径正确
- [ ] 没有 localhost 或 127.0.0.1 引用

### 内容检查
- [ ] 所有链接有效
- [ ] 图片路径正确
- [ ] 没有 broken images
- [ ] SEO 元标签完整
- [ ] Favicon 已设置

### 性能检查
- [ ] 图片已压缩
- [ ] CSS 已压缩
- [ ] JavaScript 已压缩
- [ ] 启用了缓存策略
- [ ] 通过 Lighthouse 测试(90+)

### 双语检查
- [ ] i18n.js 已更新
- [ ] 所有翻译键存在
- [ ] 语言切换功能正常
- [ ] 默认语言设置正确

---

## 🚀 Vercel 部署

### 步骤 1: 准备项目

```bash
# 进入项目目录
cd /Users/liyanmei/WorkBuddy/Claw

# 初始化 Git(如果未初始化)
git init
git add .
git commit -m "Initial commit"
```

### 步骤 2: 推送到 GitHub

```bash
# 在 GitHub 创建新仓库
# 然后推送代码
git remote add origin https://github.com/YOUR_USERNAME/Claw.git
git branch -M main
git push -u origin main
```

### 步骤 3: 连接 Vercel

1. 访问 https://vercel.com
2. 点击 "Sign Up" 或 "Login"
3. 使用 GitHub 账号登录
4. 点击 "Add New Project"
5. 选择 "Claw" 仓库
6. 点击 "Import"

### 步骤 4: 配置项目

**Framework Preset**: Other
**Root Directory**: `./`
**Build Command**: (留空)
**Output Directory**: `./`

### 步骤 5: 环境变量(可选)

如果需要配置环境变量:
```
NEXT_PUBLIC_API_URL=https://api.example.com
STRIPE_PUBLIC_KEY=pk_live_xxx
```

### 步骤 6: 部署

点击 "Deploy" 按钮,等待部署完成(通常 30-60 秒)

### 步骤 7: 验证部署

部署完成后:
1. 访问提供的 URL(如 `https://claw.vercel.app`)
2. 测试所有页面
3. 检查双语切换功能
4. 测试支付流程
5. 在移动设备上测试

---

## 🚀 Netlify 部署

### 步骤 1: 准备项目

```bash
# 确保项目在 Git 仓库中
git add .
git commit -m "Ready for deployment"
git push
```

### 步骤 2: 连接 Netlify

1. 访问 https://netlify.com
2. 点击 "Sign up"
3. 使用 GitHub 账号登录
4. 点击 "Add new site"
5. 选择 "Import from an existing project"

### 步骤 3: 配置部署

**Build command**: (留空)
**Publish directory**: (留空,使用根目录)

### 步骤 4: 部署

点击 "Deploy site" 按钮

### 步骤 5: 配置自定义域名

1. 在 Netlify 进入 Site settings
2. 点击 "Domain management"
3. 点击 "Add custom domain"
4. 输入域名(如 `www.example.com`)
5. 按照提示配置 DNS

---

## 🚀 CloudFlare Pages 部署

### 步骤 1: 连接 GitHub

1. 访问 https://dash.cloudflare.com
2. 点击 "Workers & Pages"
3. 点击 "Create application"
4. 选择 "Pages"
5. 点击 "Connect to Git"

### 步骤 2: 选择仓库

1. 选择 "Claw" 仓库
2. 点击 "Begin setup"

### 步骤 3: 配置构建设置

**Build command**: (留空)
**Build output directory**: (留空,使用根目录)

### 步骤 4: 部署

点击 "Save and Deploy" 按钮

### 步骤 5: 配置域名

1. 在 CloudFlare 控制台
2. 进入 Pages 项目设置
3. 添加自定义域名
4. DNS 会自动配置

---

## 🌐 自定义域名配置

### 域名购买

**推荐注册商**:
- Namecheap - 便宜且稳定
- GoDaddy - 品牌知名度高
- Cloudflare Registrar - 免费隐私保护
- Alibaba Cloud - 国内访问快

### DNS 配置

#### Vercel
```bash
# 在域名注册商添加 A 记录
Type: A
Name: @
Value: 76.76.21.21

# 添加 CNAME 记录
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### Netlify
```bash
# 添加 CNAME 记录
Type: CNAME
Name: @
Value: your-site.netlify.app

# 或使用 Netlify DNS
Type: ALIAS
Name: @
Value: your-site.netlify.app
```

#### CloudFlare
```bash
# 如果域名在 CloudFlare
1. 进入 Pages 项目
2. 点击 "Custom domains"
3. 添加域名
4. 自动配置 CNAME
```

---

## 🔒 HTTPS 配置

### 自动 SSL(推荐)

所有推荐的平台(Vercel/Netlify/CloudFlare)都提供免费的 Let's Encrypt SSL 证书。

**验证**:
1. 访问 `https://yourdomain.com`
2. 检查浏览器地址栏的锁形图标
3. 点击图标查看证书详情

### 手动 SSL

如果使用自己的服务器:
```bash
# 使用 Certbot
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## 📊 性能监控

### Vercel Analytics

1. 进入 Vercel 项目
2. 点击 "Analytics"
3. 查看:
   - Web Vitals
   - Real User Monitoring
   - Core Web Vitals

### Netlify Analytics

1. 安装 Netlify CLI
```bash
npm install -g netlify-cli
```

2. 连接项目
```bash
netlify link
```

3. 启用分析
```bash
netlify site:deploy --open
```

### Google Analytics

在所有页面添加:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔄 持续集成/持续部署

### 自动部署配置

#### GitHub Actions

创建 `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        working-directory: ./
```

#### Vercel 自动部署

默认情况下,Vercel 会在每次推送到 main 分支时自动部署。

---

## 🧪 测试环境

### Previews (预览)

Vercel 和 Netlify 都提供每个 Pull Request 的预览环境。

**用途**:
- 代码审查
- 功能测试
- 客户演示

**启用**:
1. 连接 GitHub 仓库
2. 在平台设置中启用 Previews
3. 每次创建 PR,自动生成预览 URL

---

## 📦 部署脚本

### 自动化部署脚本

创建 `deploy.sh`:

```bash
#!/bin/bash

echo "🚀 开始部署流程..."

# 1. 检查 Git 状态
if [ -n "$(git status --porcelain)" ]; then
    echo "❌ 有未提交的更改,请先提交"
    exit 1
fi

# 2. 运行测试
echo "🧪 运行测试..."
# npm test

# 3. 构建(如果需要)
echo "🔨 构建项目..."
# npm run build

# 4. 推送到远程
echo "📤 推送到远程仓库..."
git push origin main

# 5. 触发部署
echo "✅ 部署成功!"
echo "📊 查看: https://claw.vercel.app"
```

**使用**:
```bash
chmod +x deploy.sh
./deploy.sh
```

### 多环境部署脚本

创建 `deploy-multi.sh`:

```bash
#!/bin/bash

ENV=$1

case $ENV in
    "staging")
        echo "🧪 部署到测试环境..."
        vercel --token=$VERCEL_TOKEN --prod=false
        ;;
    "production")
        echo "🚀 部署到生产环境..."
        vercel --token=$VERCEL_TOKEN --prod
        ;;
    *)
        echo "用法: ./deploy-multi.sh [staging|production]"
        exit 1
        ;;
esac
```

---

## 🔧 故障排查

### 部署失败

**常见问题**:

1. **构建超时**
   - 解决方案: 优化构建时间,使用 Pro 版本

2. **依赖安装失败**
   - 解决方案: 检查 package.json,使用特定版本

3. **文件未找到**
   - 解决方案: 检查输出目录设置

### 页面不显示

**检查步骤**:

1. **检查浏览器控制台**
   - F12 -> Console
   - 查看错误信息

2. **检查网络请求**
   - F12 -> Network
   - 检查 404 错误

3. **检查文件路径**
   - 确保相对路径正确
   - 检查大小写(Linux 区分大小写)

### 双语功能不工作

**检查**:

1. **i18n.js 文件路径**
   - 确保 `<script src="js/i18n.js"></script>` 正确

2. **浏览器兼容性**
   - 测试 Chrome/Firefox/Safari

3. **localStorage**
   - 检查浏览器是否阻止了 localStorage

---

## 📈 部署后优化

### 1. 性能监控

```javascript
// 添加 Web Vitals 监控
import { getCLS, getFID, getLCP } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getLCP(console.log);
```

### 2. 错误跟踪

```javascript
// 使用 Sentry
import * as Sentry from "@sentry/browser";

Sentry.init({
    dsn: "YOUR_DSN",
    environment: "production"
});
```

### 3. A/B 测试

```javascript
// 简单的 A/B 测试
const variant = Math.random() < 0.5 ? 'A' : 'B';

if (variant === 'A') {
    // 显示版本 A
} else {
    // 显示版本 B
}
```

---

## 📋 部署检查清单

### 部署前
- [ ] 代码已提交到 main 分支
- [ ] 所有测试通过
- [ ] 环境变量已配置
- [ ] 域名 DNS 已配置
- [ ] SSL 证书已准备好

### 部署后
- [ ] 主页可访问
- [ ] 所有页面链接正常
- [ ] 双语切换功能工作
- [ ] 支付流程正常
- [ ] 移动端显示正常
- [ ] 性能指标达标
- [ ] SEO 元标签正确
- [ ] 错误监控已配置
- [ ] 分析代码已添加

---

## 🎯 最佳实践

### 1. 版本控制

```bash
# 使用语义化版本
git tag v1.0.0
git push --tags

# 创建发布分支
git checkout -b release/v1.0.0
```

### 2. 回滚策略

```bash
# Git 回滚
git revert <commit-hash>
git push

# 平台回滚
# Vercel: 在 Dashboard 选择之前的部署
# Netlify: 在 Deploys 选择 "Deployed"
```

### 3. 备份策略

```bash
# 定期备份数据库(如果有)
mysqldump -u user -p database > backup.sql

# 使用 AWS S3/GitHub 存储备份
aws s3 cp backup.sql s3://backups/
```

---

## 📞 支持资源

### 官方文档
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
- [CloudFlare Pages Docs](https://developers.cloudflare.com/pages)

### 社区支持
- [Vercel Discord](https://vercel.com/discord)
- [Netlify Community](https://answers.netlify.com/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/vercel)

### 紧急联系
- Vercel Support: support@vercel.com
- Netlify Support: support@netlify.com
- CloudFlare Support: support@cloudflare.com

---

## 📊 部署统计

### 部署时间
- 首次部署: ~30 秒
- 增量部署: ~15 秒
- 冷启动部署: ~45 秒

### 成本估算
| 平台 | 免费额度 | 预计月成本 |
|------|----------|------------|
| Vercel | 100GB 带宽 | $0-20 |
| Netlify | 100GB 带宽 | $0-19 |
| CloudFlare Pages | 无限带宽 | $0-20 |

---

**文档版本**: 1.0
**最后更新**: 2026-03-11
**维护者**: 开发团队
