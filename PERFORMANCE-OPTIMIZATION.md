# 性能优化指南

## 概述

本文档提供了项目性能优化的最佳实践和实施建议,以提升用户体验和搜索引擎排名。

## 📊 当前性能指标

### 目标指标
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FCP (First Contentful Paint)**: < 1.8s
- **TTI (Time to Interactive)**: < 3.8s

---

## 🚀 CSS 优化

### 1. 压缩和最小化

**方法**:
```bash
# 使用 CSSNano
npm install cssnano-cli
cssnano styles.css styles.min.css

# 或使用 PostCSS
npm install postcss postcss-cli postcss-preset-env
npx postcss styles.css --use postcss-preset-env --output styles.min.css
```

**收益**:
- 减少 CSS 文件大小 30-50%
- 加快页面加载速度

### 2. 关键 CSS 内联

**实施方法**:
```html
<style>
    /* 内联关键 CSS,立即渲染首屏内容 */
    .hero { ... }
    .header { ... }
</style>
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

**收益**:
- 消除渲染阻塞
- 提升 FCP 和 LCP

### 3. CSS 选择器优化

**避免**:
```css
/* 过深的选择器 */
.header nav ul li a { }

/* 通用选择器 */
* { }

#id .class div { }
```

**推荐**:
```css
/* 扁平选择器 */
.nav-link { }

/* BEM 命名 */
.header__nav { }

/* 简单选择器 */
.card { }
```

### 4. 移除未使用的 CSS

**工具**:
- [PurgeCSS](https://purgecss.com/)
- [UnCSS](https://github.com/uncss/uncss)

**使用示例**:
```javascript
// PurgeCSS
const purgecss = new Purgecss({
    content: ['*.html'],
    css: ['*.css'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})
```

---

## 🖼️ 图片优化

### 1. 格式选择

**使用现代格式**:
- **WebP**: 比JPEG小 25-35%
- **AVIF**: 比WebP小 50%

**回退策略**:
```html
<picture>
    <source srcset="image.avif" type="image/avif">
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Description">
</picture>
```

### 2. 响应式图片

**实施方法**:
```html
<img srcset="image-400w.jpg 400w,
             image-800w.jpg 800w,
             image-1200w.jpg 1200w"
     sizes="(max-width: 600px) 400px,
            (max-width: 1200px) 800px,
            1200px"
     src="image-800w.jpg"
     alt="Description"
     loading="lazy">
```

### 3. 延迟加载 (Lazy Loading)

**原生支持**:
```html
<img src="placeholder.jpg"
     data-src="real-image.jpg"
     alt="Description"
     loading="lazy">
```

**JavaScript 方案**:
```javascript
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));
```

### 4. 图片压缩工具

**推荐工具**:
- [Squoosh](https://squoosh.app/) - Google 的在线工具
- [TinyPNG](https://tinypng.com/) - 在线压缩
- [ImageOptim](https://imageoptim.com/) - Mac 应用
- [sharp](https://sharp.pixelplumbing.com/) - Node.js 库

**CLI 使用**:
```bash
# sharp
npm install sharp
sharp input.jpg -o output.jpg --quality 80
```

---

## ⚡ JavaScript 优化

### 1. 异步加载

**方法**:
```html
<!-- 非关键脚本 -->
<script src="non-critical.js" async></script>

<!-- 依赖其他脚本 -->
<script src="dependent.js" defer></script>
```

### 2. 代码分割

**示例**:
```javascript
// 动态导入
document.querySelector('#button').addEventListener('click', async () => {
    const module = await import('./heavy-module.js');
    module.doSomething();
});
```

### 3. 压缩和混淆

**工具**:
- [Terser](https://terser.org/)
- [UglifyJS](https://github.com/mishoo/UglifyJS)

**使用**:
```bash
npm install terser-cli
terser script.js -o script.min.js -c -m
```

### 4. Tree Shaking

**Webpack 配置**:
```javascript
module.exports = {
    mode: 'production',
    optimization: {
        usedExports: true,
        sideEffects: false
    }
}
```

---

## 🌐 资源优化

### 1. 启用 Gzip/Brotli 压缩

**Nginx 配置**:
```nginx
gzip on;
gzip_types text/css text/javascript application/javascript image/svg+xml;
gzip_comp_level 6;

brotli on;
brotli_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
```

**收益**:
- HTML/CSS/JS 文件减少 60-80%
- 图标字体减少 90%

### 2. 使用 CDN

**推荐 CDN**:
- Cloudflare - 免费版
- AWS CloudFront
- Cloudinary - 图片优化
- Vercel/Netlify - 自动 CDN

**配置示例**:
```javascript
// 使用 Cloudinary
import { Image } from 'cloudinary-react';

<Image
    src="image.jpg"
    width="800"
    height="600"
    crop="fill"
    quality="auto"
    fetchFormat="auto"
/>
```

### 3. 预连接和预加载

```html
<!-- 预连接外部域名 -->
<link rel="preconnect" href="https://api.example.com">
<link rel="dns-prefetch" href="https://api.example.com">

<!-- 预加载关键资源 -->
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="critical.css" as="style">
<link rel="preload" href="hero-image.jpg" as="image">
```

### 4. HTTP/2 和 HTTP/3

**Nginx HTTP/2**:
```nginx
listen 443 ssl http2;
```

**收益**:
- 多路复用
- 服务器推送
- 二进制协议

---

## 📱 移动端优化

### 1. 响应式设计

**断点建议**:
```css
/* 移动优先 */
@media (max-width: 640px) { /* 手机 */ }
@media (max-width: 768px) { /* 平板 */ }
@media (min-width: 769px) { /* 桌面 */ }
```

### 2. 触摸优化

```css
/* 增大触摸目标 */
button, a {
    min-height: 48px;
    min-width: 48px;
}

/* 禁用双击缩放 */
touch-action: manipulation;
```

### 3. 减少重排和重绘

```css
/* 使用 transform 和 opacity */
.animated {
    will-change: transform;
    transform: translateZ(0);
}

/* 避免 */
.animated {
    top: 100px;  /* 触发重排 */
}
```

---

## 🔧 浏览器缓存

### 1. 静态资源缓存

**Nginx 配置**:
```nginx
location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 2. HTML 缓存策略

```html
<!-- 使用 ETag -->
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="ETag" content="version-123">
```

### 3. Service Worker

```javascript
// 注册 Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
    });
}

// sw.js
const CACHE_NAME = 'v1';
const ASSETS = [
    '/',
    '/styles.css',
    '/script.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        })
    );
});
```

---

## 📊 性能监控

### 1. Web Vitals API

```javascript
import { getCLS, getFID, getLCP } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getLCP(console.log);
```

### 2. Lighthouse 测试

**运行**:
```bash
npm install -g lighthouse
lighthouse https://yoursite.com --view
```

### 3. Google Analytics

```javascript
gtag('event', 'timing_complete', {
    'name': 'load',
    'value': 1234,
    'event_category': 'performance'
});
```

---

## 🎯 实施优先级

### 高优先级 (立即实施)
1. ✅ 启用图片压缩和 WebP 格式
2. ✅ 实施图片懒加载
3. ✅ 启用 Gzip/Brotli 压缩
4. ✅ 延迟加载非关键 JavaScript

### 中优先级 (本周)
5. ✅ 关键 CSS 内联
6. ✅ 移除未使用的 CSS
7. ✅ 配置浏览器缓存
8. ✅ 实施 CDN

### 低优先级 (本月)
9. ⏳ 代码分割和 Tree Shaking
10. ⏳ Service Worker 离线缓存
11. ⏳ HTTP/2 和 HTTP/3
12. ⏳ 性能监控系统

---

## 📝 检查清单

### 部署前检查
- [ ] 所有图片已压缩和优化
- [ ] CSS 已压缩和合并
- [ ] JavaScript 已压缩和异步加载
- [ ] 启用了 Gzip/Brotli 压缩
- [ ] 配置了正确的缓存头
- [ ] 实施了图片懒加载
- [ ] 移动了未使用的代码
- [ ] 通过 Lighthouse 测试(90+ 分)
- [ ] 移动端测试通过
- [ ] 性能监控已配置

### 定期检查 (每月)
- [ ] 运行 Lighthouse 审计
- [ ] 检查 Web Vitals 指标
- [ ] 审查和优化第三方脚本
- [ ] 更新图片到最新格式
- [ ] 审查缓存策略

---

## 🛠️ 工具推荐

### 在线工具
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/)

### 开发工具
- [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
- [Source Map Explorer](https://www.npmjs.com/package/source-map-explorer)
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)

### CI/CD 集成
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [SpeedCurve](https://www.speedcurve.com/)
- [Calibre](https://calibreapp.com/)

---

## 📚 参考资源

- [Web.dev Performance](https://web.dev/performance/)
- [MDN Performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance)
- [Core Web Vitals](https://web.dev/vitals/)
- [HTTP Archive](https://httparchive.org/)

---

**文档版本**: 1.0
**最后更新**: 2026-03-11
**维护者**: 开发团队
