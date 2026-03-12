# 🚀 Vercel 部署快速指南

## 📋 前置准备

### 1. 安装必要工具

```bash
# 安装 Git (如果还没有)
brew install git

# 安装 Node.js (Vercel CLI 需要)
brew install node

# 安装 Vercel CLI
npm install -g vercel
```

### 2. 注册账号

- **GitHub账号**: https://github.com/signup (免费)
- **Vercel账号**: https://vercel.com/signup (免费,用GitHub登录)

---

## 🔧 部署步骤

### 步骤 1: 初始化 Git 仓库

```bash
# 进入项目目录
cd /Users/liyanmei/WorkBuddy/Claw

# 初始化 Git
git init

# 添加所有文件
git add .

# 第一次提交
git commit -m "Initial commit: Deploy to Vercel"
```

### 步骤 2: 创建 GitHub 仓库并推送

**方法 A: 通过 GitHub 网页操作**

1. 访问 https://github.com/new
2. 仓库名称: `Claw` (或你喜欢的名称)
3. 选择 `Public` 或 `Private`
4. **不要勾选** "Initialize this repository with a README"
5. 点击 "Create repository"

**方法 B: 通过 GitHub CLI 操作**

```bash
# 安装 GitHub CLI
brew install gh

# 登录 GitHub
gh auth login

# 创建仓库并推送
gh repo create Claw --public --source=. --remote=origin --push
```

### 步骤 3: 推送代码到 GitHub

```bash
# 如果是手动创建的仓库,运行这些命令:
git remote add origin https://github.com/YOUR_USERNAME/Claw.git
git branch -M main
git push -u origin main
```

### 步骤 4: 连接 Vercel

**方法 A: 通过 Vercel 网页操作 (推荐)**

1. 访问 https://vercel.com
2. 点击 "Sign Up" 或 "Login"
3. 选择 "Continue with GitHub"
4. 授权 Vercel 访问你的 GitHub
5. 点击 "Add New Project"
6. 选择 "Claw" 仓库
7. 点击 "Import"

**方法 B: 通过 Vercel CLI 操作**

```bash
# 登录 Vercel
vercel login

# 部署项目
vercel --prod
```

---

## ⚙️ Vercel 配置

### 项目设置

在 Vercel 项目设置中配置:

| 配置项 | 值 |
|--------|-----|
| Framework Preset | Other |
| Root Directory | `./` |
| Build Command | (留空) |
| Output Directory | `./` |

### 环境变量 (可选)

如果需要配置:

```
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## 🌐 配置自定义域名

### 步骤 1: 购买域名

推荐域名注册商:
- Namecheap: https://www.namecheap.com (便宜)
- Cloudflare Registrar: https://www.cloudflare.com/products/registrar/ (免费隐私保护)

### 步骤 2: 在 Vercel 添加域名

1. 进入 Vercel 项目 -> Settings -> Domains
2. 点击 "Add"
3. 输入你的域名 (如 `clawaicreator.com`)
4. 点击 "Add"

### 步骤 3: 配置 DNS

在域名注册商的DNS管理中添加:

**A 记录** (主域名):
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**CNAME 记录** (www 子域名):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### 步骤 4: 验证

1. 等待 DNS 生效 (通常 5-10 分钟)
2. 在 Vercel 点击 "Verify"
3. 访问你的域名,确保可以正常访问

---

## 🚀 部署命令

### 首次部署

```bash
vercel --prod
```

### 后续更新部署

每次更新代码后:

```bash
# 1. 提交更改
git add .
git commit -m "Update: 描述你的更改"

# 2. 推送到 GitHub
git push

# 3. Vercel 会自动部署 (或者手动触发)
vercel --prod
```

### 预览部署 (测试环境)

```bash
# 部署到预览环境 (不覆盖生产环境)
vercel
```

---

## 📊 部署验证

### 检查清单

部署完成后,检查:

- [ ] 主页可以访问
- [ ] 所有页面链接正常 (index.html, ai-creator.html, etc.)
- [ ] 双语切换功能工作
- [ ] 支付页面正常显示
- [ ] 图片加载正常
- [ ] 移动端显示正常
- [ ] HTTPS 证书已生效 (浏览器显示锁形图标)

### 测试网址

假设你的 Vercel 域名是 `claw.vercel.app`,测试:

- 主页: https://claw.vercel.app
- AI Creator: https://claw.vercel.app/ai-creator.html
- 支付页面: https://claw.vercel.app/payment-personal.html

---

## 🔄 自动部署

Vercel 默认会在每次推送到 `main` 分支时自动部署。

### 禁用自动部署

如果需要手动控制:

1. 进入 Vercel 项目 -> Settings -> Git
2. 取消勾选 "Deploy Preview" 或 "Production"

### 启用 GitHub Actions (高级)

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

---

## 🐛 故障排查

### 部署失败

**问题**: 部署时报错

**解决方案**:
1. 检查 Vercel 控制台的构建日志
2. 确保所有文件路径正确
3. 检查是否有语法错误

### 页面 404

**问题**: 访问某些页面显示 404

**解决方案**:
1. 确保文件名大小写正确 (Linux 区分大小写)
2. 检查文件是否在根目录
3. 清除浏览器缓存

### 双语功能不工作

**问题**: 语言切换按钮无反应

**解决方案**:
1. 检查 `js/i18n.js` 文件路径
2. 打开浏览器控制台 (F12) 查看错误
3. 确保 localStorage 被允许

### 自定义域名不工作

**问题**: 访问自定义域名失败

**解决方案**:
1. 检查 DNS 配置是否正确
2. 使用 `dig yourdomain.com` 检查 DNS 解析
3. 在 Vercel 中重新验证域名

---

## 📈 优化建议

### 1. 性能优化

- 压缩图片 (使用 TinyPNG 或 ImageOptim)
- 启用 Gzip 压缩 (Vercel 自动启用)
- 使用 CDN (Vercel 全球 CDN)

### 2. SEO 优化

- 添加 meta 标签
- 创建 sitemap.xml
- 配置 robots.txt

### 3. 安全优化

- 使用 HTTPS (Vercel 自动提供)
- 配置 CSP (Content Security Policy)
- 定期更新依赖

---

## 💰 成本估算

| 项目 | 免费额度 | 预计成本 |
|------|----------|----------|
| Vercel | 100GB 带宽/月 | $0-20/月 |
| 域名 | - | $10-15/年 |
| 总计 | - | $10-15/年 |

---

## 📞 获取帮助

### 官方资源

- [Vercel 文档](https://vercel.com/docs)
- [Vercel Discord](https://vercel.com/discord)
- [Vercel Support](mailto:support@vercel.com)

### 常用命令

```bash
# 查看部署列表
vercel list

# 查看项目信息
vercel inspect

# 查看日志
vercel logs

# 删除项目
vercel remove
```

---

## 🎉 完成!

现在你的项目已经部署到 Vercel 了!

- **生产环境**: https://claw.vercel.app (或你的自定义域名)
- **全球访问**: Vercel CDN 加速
- **HTTPS**: 自动配置
- **自动部署**: 推送代码即自动更新

下一步:
1. 配置自定义域名
2. 优化性能和 SEO
3. 添加分析工具 (Google Analytics)
4. 开始推广!

**记得**: 保持更新,快速迭代,收集用户反馈!

---

**最后更新**: 2026-03-12
