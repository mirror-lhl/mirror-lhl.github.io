#!/bin/bash

echo "🚀 开始部署到 Vercel..."

# 检查是否已安装 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "📦 正在安装 Vercel CLI..."
    npm install -g vercel
fi

# 登录 Vercel
echo "🔐 请登录 Vercel 账号..."
vercel login

# 部署项目
echo "📤 正在部署..."
vercel --prod

echo "✅ 部署完成!"
echo "📊 访问 https://vercel.com/dashboard 查看详情"
