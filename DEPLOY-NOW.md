# 🚀 Vercel 部署 - 立即开始

## ✅ 已完成

- ✅ Git 仓库已初始化
- ✅ 所有文件已提交
- ✅ 部署指南已创建 (`VERCEL-DEPLOYMENT.md`)

## 📝 接下来你需要做的 (3步)

### 步骤 1: 创建 GitHub 仓库 (2分钟)

**方法 A: 通过网页 (推荐新手)**

1. 访问: https://github.com/new
2. 仓库名称: `Claw`
3. 选择 `Public` 或 `Private`
4. **不要勾选** "Initialize this repository with a README"
5. 点击 "Create repository"

**方法 B: 通过命令行 (快速)**

```bash
# 如果你安装了 GitHub CLI
gh auth login
gh repo create Claw --public --source=. --remote=origin --push
```

### 步骤 2: 推送代码到 GitHub (1分钟)

如果你用方法 A 创建了仓库,运行:

```bash
cd /Users/liyanmei/WorkBuddy/Claw
git remote add origin https://github.com/YOUR_USERNAME/Claw.git
git branch -M main
git push -u origin main
```

> **注意**: 把 `YOUR_USERNAME` 替换成你的 GitHub 用户名

### 步骤 3: 连接 Vercel 部署 (5分钟)

**方法 A: 通过网页 (最简单,推荐)**

1. 访问: https://vercel.com
2. 点击 "Sign Up" 或 "Login"
3. 选择 "Continue with GitHub"
4. 授权 Vercel 访问你的 GitHub
5. 点击 "Add New Project"
6. 选择 "Claw" 仓库
7. 点击 "Import"
8. 配置:
   - Framework Preset: `Other`
   - Root Directory: `./`
   - Build Command: (留空)
   - Output Directory: `./`
9. 点击 "Deploy"
10. 等待 30-60 秒,部署完成!

**方法 B: 通过命令行**

```bash
# 安装 Vercel CLI (如果还没安装)
npm install -g vercel

# 登录
vercel login

# 部署
cd /Users/liyanmei/WorkBuddy/Claw
vercel --prod
```

---

## 🎉 部署完成!

部署成功后,你会得到一个类似这样的网址:

```
https://claw.vercel.app
```

或

```
https://claw-abc123.vercel.app
```

### 验证部署

访问以下页面测试:

- 主页: `https://你的域名/`
- AI Creator: `https://你的域名/ai-creator.html`
- 支付页面: `https://你的域名/payment-personal.html`

---

## 🌐 配置自定义域名 (可选)

如果你有自己的域名:

1. 在 Vercel 项目中点击 "Add Domain"
2. 输入你的域名 (如 `clawaicreator.com`)
3. 在域名注册商添加 DNS 记录:

```
A 记录:
  Name: @
  Value: 76.76.21.21

CNAME 记录:
  Name: www
  Value: cname.vercel-dns.com
```

4. 等待 5-10 分钟 DNS 生效

---

## 📖 详细文档

查看完整的部署指南:

```bash
open VERCEL-DEPLOYMENT.md
```

或直接打开文件查看。

---

## 💡 提示

### 快速更新部署

每次修改代码后:

```bash
git add .
git commit -m "更新描述"
git push
```

Vercel 会自动部署,无需手动操作!

### 预览环境 (不覆盖生产环境)

```bash
vercel
```

会生成一个预览网址,用于测试。

### 查看部署日志

```bash
vercel logs
```

---

## ❓ 遇到问题?

### 1. Git 推送失败

**错误**: `fatal: 'origin' does not appear to be a git repository`

**解决**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/Claw.git
```

### 2. Vercel 部署失败

**检查**:
- 查看构建日志
- 确保文件路径正确
- 检查是否有语法错误

### 3. 页面 404

**解决**:
- 确保文件名大小写正确
- 检查文件是否在根目录
- 清除浏览器缓存

---

## 📞 需要帮助?

- 查看 `VERCEL-DEPLOYMENT.md` 获取详细说明
- 访问 [Vercel 文档](https://vercel.com/docs)
- 联系我帮你解决具体问题

---

**准备好了吗? 开始部署吧! 🚀**
