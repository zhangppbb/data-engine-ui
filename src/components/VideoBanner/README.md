# VideoBanner 组件

一个现代化的视频背景 Banner 组件，支持动态视频背景、渐变遮罩、动画效果和响应式设计。

## 功能特性

- 🎥 **动态视频背景** - 支持自动播放、静音、循环的视频背景
- 🎨 **渐变遮罩层** - 确保内容在视频背景上清晰可见
- ✨ **动画效果** - 淡入动画和装饰性脉冲效果
- 📱 **响应式设计** - 适配各种屏幕尺寸
- 🎯 **可配置内容** - 支持自定义标题、副标题、按钮和统计数据
- 🚀 **事件支持** - 完整的事件回调系统

## 使用方法

### 基础用法

```vue
<template>
  <VideoBanner
    video-src="/videos/banner-video.mp4"
    title="探索数据驱动的未来"
    subtitle="智能化企业数据解决方案"
    @primary-action="handlePrimaryAction"
  />
</template>

<script setup>
import VideoBanner from '@/components/VideoBanner/src/VideoBanner.vue'

const handlePrimaryAction = () => {
  console.log('Primary action clicked')
}
</script>
```

### 完整配置

```vue
<template>
  <VideoBanner
    :video-src="videoSrc"
    :title="bannerTitle"
    :subtitle="bannerSubtitle"
    :primary-button-text="primaryText"
    :secondary-button-text="secondaryText"
    :stats="bannerStats"
    @primary-action="handlePrimaryAction"
    @secondary-action="handleSecondaryAction"
    @video-loaded="onVideoLoaded"
    @video-error="onVideoError"
  />
</template>

<script setup>
import { ref } from 'vue'
import VideoBanner from '@/components/VideoBanner/src/VideoBanner.vue'

const videoSrc = ref('/videos/banner-video.mp4')
const bannerTitle = ref('探索数据驱动的未来')
const bannerSubtitle = ref('智能化企业数据解决方案，助力业务数字化转型')
const primaryText = ref('开始探索')
const secondaryText = ref('了解更多')

const bannerStats = ref([
  { value: '10K+', label: '企业用户' },
  { value: '50M+', label: '数据条目' },
  { value: '99.9%', label: '服务可用性' },
  { value: '24/7', label: '技术支持' }
])

const handlePrimaryAction = () => {
  // 处理主要按钮点击
}

const handleSecondaryAction = () => {
  // 处理次要按钮点击
}

const onVideoLoaded = () => {
  // 视频加载完成
}

const onVideoError = (error) => {
  // 视频加载错误
}
</script>
```

## Props

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `videoSrc` | `string` | `'/videos/banner-video.mp4'` | 视频文件路径 |
| `title` | `string` | `'探索数据驱动的未来'` | 主标题文本 |
| `subtitle` | `string` | `'智能化企业数据解决方案，助力业务数字化转型'` | 副标题文本 |
| `primaryButtonText` | `string` | `'开始探索'` | 主按钮文本 |
| `secondaryButtonText` | `string` | `'了解更多'` | 次要按钮文本 |
| `stats` | `Array` | 见下方默认值 | 统计数据数组 |

### 默认统计数据

```javascript
[
  { value: '10K+', label: '企业用户' },
  { value: '50M+', label: '数据条目' },
  { value: '99.9%', label: '服务可用性' },
  { value: '24/7', label: '技术支持' }
]
```

## Events

| 事件名 | 参数 | 描述 |
|--------|------|------|
| `primaryAction` | - | 主按钮点击事件 |
| `secondaryAction` | - | 次要按钮点击事件 |
| `videoLoaded` | - | 视频加载完成事件 |
| `videoError` | `error: Event` | 视频加载错误事件 |

## 样式定制

组件使用了以下 CSS 变量，可以通过覆盖这些变量来自定义样式：

```scss
:root {
  --video-banner-height: 400px;
  --video-overlay-opacity: 0.8;
  --video-animation-duration: 0.8s;
}
```

## 视频格式支持

- MP4 (推荐)
- WebM
- OGG

建议视频规格：
- 分辨率：1920x1080 或更高
- 时长：10-30秒循环
- 文件大小：< 10MB
- 编码：H.264

## 响应式断点

- 移动设备：< 640px
- 平板设备：640px - 768px  
- 桌面设备：> 768px

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## 注意事项

1. **自动播放策略** - 现代浏览器可能阻止自动播放，建议静音处理
2. **视频加载** - 建议预加载视频或提供占位内容
3. **性能优化** - 视频文件大小会影响页面加载速度
4. **无障碍访问** - 组件包含适当的 ARIA 标签和语义化标记

## 示例页面

查看 `src/views/pages/VideoBannerDemo.vue` 获取完整的使用示例和最佳实践。
