/**
 * HTML 转 Vue3 转换工具
 * 使用方法: node convert-html-to-vue.js
 *
 * 此脚本将 pages 目录下的 HTML 文件转换为 Vue3 单文件组件
 */

const fs = require('fs')
const path = require('path')

// 需要转换的页面列表
const pagesToConvert = [
  { file: 'index.html', name: 'Index', title: '首页' },
  { file: 'dashboard.html', name: 'Dashboard', title: '数据大屏' },
  { file: 'workspace.html', name: 'Workspace', title: '工作空间' },
  { file: 'profile.html', name: 'Profile', title: '个人资料' },
  { file: 'search-results.html', name: 'SearchResults', title: '搜索结果' },
  { file: 'apps/apps.html', name: 'apps/Apps', title: '应用列表' },
  { file: 'apps/AI智能体.html', name: 'apps/AiAgent', title: 'AI智能体' },
  { file: 'apps/信用评价.html', name: 'apps/CreditEvaluation', title: '信用评价' },
  { file: 'apps/合规审查.html', name: 'apps/ComplianceReview', title: '合规审查' },
  { file: 'apps/市场竞争分析.html', name: 'apps/MarketCompetition', title: '市场竞争分析' },
  { file: 'apps/app-detail.html', name: 'apps/AppDetail', title: '应用详情' },
  { file: 'cases/cases.html', name: 'cases/Cases', title: '案例列表' },
  { file: 'cases/case-detail.html', name: 'cases/CaseDetail', title: '案例详情' },
  { file: 'resources/resources.html', name: 'resources/Resources', title: '资源列表' },
  { file: 'resources/api-market.html', name: 'resources/ApiMarket', title: 'API市场' },
]

// 提取 HTML body 内容
function extractBody(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)
  return bodyMatch ? bodyMatch[1].trim() : html
}

// 提取 style 内容
function extractStyles(html) {
  const styleMatches = html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)
  const styles = []
  for (const match of styleMatches) {
    styles.push(match[1].trim())
  }
  return styles.join('\n\n')
}

// 转换 HTML 为 Vue 模板
function convertHtmlToVueTemplate(html) {
  let template = html

  // 替换 href 链接为 router-link 或 @click
  template = template.replace(/href="index\.html"/g, 'to="/pages/index"')
  template = template.replace(/href="dashboard\.html"/g, 'to="/pages/dashboard"')
  template = template.replace(/href="workspace\.html"/g, 'to="/pages/workspace"')
  template = template.replace(/href="profile\.html"/g, 'to="/pages/profile"')
  template = template.replace(/href="search-results\.html"/g, 'to="/pages/search-results"')
  template = template.replace(/href="apps\/apps\.html"/g, 'to="/pages/apps/list"')
  template = template.replace(/href="cases\/cases\.html"/g, 'to="/pages/cases/list"')
  template = template.replace(/href="resources\/resources\.html"/g, 'to="/pages/resources/list"')

  // 替换 onclick 中的 window.location.href
  template = template.replace(/onclick="window\.location\.href='([^']*)'"/g, (match, url) => {
    const vuePath = url.replace('.html', '').replace(/\//g, '-')
    return `@click="navigateTo('${vuePath}')"`
  })

  // 替换 id 为 ref
  template = template.replace(/\bid="([^"]+)"/g, 'ref="$1"')

  return template
}

// 生成 Vue 文件内容
function generateVueFile(template, styles, script = '') {
  return `<template>
  <div class="pages-container">
${template}
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

${script}

const navigateTo = (path: string) => {
  router.push(path)
}

onMounted(() => {
  // 页面加载后的初始化
})
</script>

<style scoped lang="scss">
@use './styles/shared.scss';

${styles}
</style>
`
}

// 主转换函数
function convertPage(pageConfig) {
  const htmlPath = path.join(__dirname, pageConfig.file)

  if (!fs.existsSync(htmlPath)) {
    console.warn(`⚠️ 文件不存在: ${pageConfig.file}`)
    return
  }

  const html = fs.readFileSync(htmlPath, 'utf-8')

  // 提取各部分
  const bodyContent = extractBody(html)
  const styles = extractStyles(html)

  // 转换模板
  const template = convertHtmlToVueTemplate(bodyContent)

  // 生成 Vue 内容
  const vueContent = generateVueFile(template, styles)

  // 确定输出路径
  const outputPath = path.join(__dirname, `${pageConfig.name}.vue`)

  // 确保目录存在
  const dir = path.dirname(outputPath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  // 写入文件
  fs.writeFileSync(outputPath, vueContent, 'utf-8')
  console.log(`✅ 已转换: ${pageConfig.file} -> ${pageConfig.name}.vue`)
}

// 执行转换
console.log('🚀 开始转换 HTML 文件为 Vue3 组件...\n')

pagesToConvert.forEach(page => {
  try {
    convertPage(page)
  } catch (error) {
    console.error(`❌ 转换失败 ${page.file}:`, error.message)
  }
})

console.log('\n✨ 转换完成!')
console.log('\n下一步:')
console.log('1. 检查生成的 Vue 文件')
console.log('2. 添加缺少的响应式逻辑')
console.log('3. 更新 router/modules/remaining.ts 中的路由配置')
