/**
 * HTML 转 Vue3 智能转换器
 * 使用方法：在浏览器控制台或 Node.js 环境中运行
 */

const fs = require('fs');
const path = require('path');

// 页面配置列表
const pages = [
  // 根目录页面
  { file: 'workspace.html', name: 'Workspace', folder: '', title: '工作空间', theme: 'light' },
  { file: 'profile.html', name: 'Profile', folder: '', title: '个人中心', theme: 'dark' },
  { file: 'search-results.html', name: 'SearchResults', folder: '', title: '搜索结果', theme: 'dark' },

  // Apps 目录
  { file: 'apps/apps.html', name: 'Apps', folder: 'apps', title: '应用列表', theme: 'dark' },
  { file: 'apps/AI智能体.html', name: 'AiAgent', folder: 'apps', title: 'AI智能体', theme: 'dark' },
  { file: 'apps/app-detail.html', name: 'AppDetail', folder: 'apps', title: '应用详情', theme: 'dark' },
  { file: 'apps/app-spec.html', name: 'AppSpec', folder: 'apps', title: '应用规格', theme: 'dark' },
  { file: 'apps/信用评价.html', name: 'CreditEvaluation', folder: 'apps', title: '信用评价', theme: 'dark' },
  { file: 'apps/合规审查.html', name: 'ComplianceReview', folder: 'apps', title: '合规审查', theme: 'dark' },
  { file: 'apps/市场分析报告 .html', name: 'MarketAnalysis', folder: 'apps', title: '市场分析报告', theme: 'dark' },
  { file: 'apps/市场竞争分析.html', name: 'MarketCompetition', folder: 'apps', title: '市场竞争分析', theme: 'dark' },

  // Cases 目录
  { file: 'cases/cases.html', name: 'Cases', folder: 'cases', title: '案例列表', theme: 'dark' },
  { file: 'cases/case-detail.html', name: 'CaseDetail', folder: 'cases', title: '案例详情', theme: 'dark' },
  { file: 'cases/case-detail-copy.html', name: 'CaseDetailCopy', folder: 'cases', title: '案例详情(副本)', theme: 'dark' },
  { file: 'cases/cases-copy.html', name: 'CasesCopy', folder: 'cases', title: '案例列表(副本)', theme: 'dark' },

  // Resources 目录
  { file: 'resources/resources.html', name: 'Resources', folder: 'resources', title: '资源列表', theme: 'dark' },
  { file: 'resources/api-market.html', name: 'ApiMarket', folder: 'resources', title: 'API市场', theme: 'dark' },
  { file: 'resources/api-detail.html', name: 'ApiDetail', folder: 'resources', title: 'API详情', theme: 'dark' },
  { file: 'resources/mcp-market.html', name: 'McpMarket', folder: 'resources', title: 'MCP市场', theme: 'dark' },
  { file: 'resources/mcp-detail.html', name: 'McpDetail', folder: 'resources', title: 'MCP详情', theme: 'dark' },
  { file: 'resources/resource-detail.html', name: 'ResourceDetail', folder: 'resources', title: '资源详情', theme: 'dark' },
  { file: 'resources/skill-market.html', name: 'SkillMarket', folder: 'resources', title: '技能市场', theme: 'dark' },
  { file: 'resources/skill-detail.html', name: 'SkillDetail', folder: 'resources', title: '技能详情', theme: 'dark' },
];

// 提取 HTML body 内容
function extractBody(html) {
  const match = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  return match ? match[1].trim() : html;
}

// 提取 styles
function extractStyles(html) {
  const matches = html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi);
  const styles = [];
  for (const match of matches) {
    styles.push(match[1].trim());
  }
  return styles.join('\n');
}

// 清理 HTML 内容
function cleanHtml(html) {
  // 移除 script 标签
  html = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  // 移除注释
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  // 移除 [MODULE] 标记
  html = html.replace(/\[\/MODULE\][\s\S]*?_[\w\s]+/g, '');
  html = html.replace(/\[MODULE\][\s\S]*?_[\w\s]+/g, '');
  return html.trim();
}

// 转换 HTML 属性为 Vue 格式
function convertAttributes(html) {
  // 转换 href 为 router-link
  html = html.replace(/href="index\.html"/g, 'to="/pages/index"');
  html = html.replace(/href="dashboard\.html"/g, 'to="/pages/dashboard"');
  html = html.replace(/href="workspace\.html"/g, 'to="/pages/workspace"');
  html = html.replace(/href="profile\.html"/g, 'to="/pages/profile"');
  html = html.replace(/href="search-results\.html"/g, 'to="/pages/search-results"');
  html = html.replace(/href="apps\/apps\.html"/g, 'to="/pages/apps/list"');
  html = html.replace(/href="apps\/AI智能体\.html"/g, 'to="/pages/apps/ai-agent"');
  html = html.replace(/href="cases\/cases\.html"/g, 'to="/pages/cases/list"');
  html = html.replace(/href="resources\/resources\.html"/g, 'to="/pages/resources/list"');

  // 转换 onclick
  html = html.replace(/onclick="window\.location\.href='([^']*)'"/g, '@click="navigateTo(\'$1\')"');

  // 转换 id 为 ref (简单的)
  html = html.replace(/\bid="([^"]+)"/g, (match, id) => {
    // 保留某些 id 用于锚点
    if (['particles-container'].includes(id)) {
      return match;
    }
    return `ref="${id}"`;
  });

  return html;
}

// 生成 Vue 单文件组件
function generateVueComponent(page, htmlContent, styles) {
  const isLight = page.theme === 'light';
  const bgClass = isLight ? 'bg-neutral-bg' : 'bg-stars';
  const textClass = isLight ? 'text-neutral-text' : 'text-slate-300';

  return `<template>
  <div class="pages-container ${bgClass} ${textClass} min-h-screen relative overflow-x-hidden">
    <!-- 全局背景光晕 -->
    <div class="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div class="aurora-blur bg-aurora-cyan w-[500px] h-[500px] top-[-100px] left-[-100px] animate-pulse-slow"></div>
      <div class="aurora-blur bg-aurora-red w-[400px] h-[400px] bottom-[-50px] right-[-50px] opacity-20 animate-pulse-slow animation-delay-1000"></div>
      <div class="aurora-blur bg-aurora-purple w-[600px] h-[600px] top-[40%] left-[30%] opacity-10 blur-[120px] animate-pulse-slow animation-delay-2000"></div>
    </div>

    <!-- 主内容 -->
    <main class="relative z-10 max-w-7xl mx-auto px-6 py-8">
${htmlContent.split('\n').map(line => '      ' + line).join('\n')}
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import Icon from '@/components/Icon/src/Icon.vue'

const router = useRouter()

// 页面状态
const loading = ref(false)

// 导航方法
const navigateTo = (path: string) => {
  const routeMap: Record<string, string> = {
    'index.html': '/pages/index',
    'dashboard.html': '/pages/dashboard',
    'workspace.html': '/pages/workspace',
    'profile.html': '/pages/profile',
    'search-results.html': '/pages/search-results',
    'apps/apps.html': '/pages/apps/list',
    'cases/cases.html': '/pages/cases/list',
    'resources/resources.html': '/pages/resources/list'
  }
  const route = routeMap[path] || path.replace('.html', '')
  router.push(route)
}

onMounted(() => {
  // 页面初始化
  console.log('${page.title} 页面加载完成')
})
</script>

<style scoped lang="scss">
${isLight ? '@use \'../styles/shared-light.scss\';' : '@use \'../styles/shared.scss\';'}

${styles}

// 页面特定样式
.pages-container {
  min-height: calc(100vh - 84px);
}

${isLight ? `
// 亮色主题变量
:root {
  --neutral-bg: #F8FAFC;
  --neutral-surface: #FFFFFF;
  --neutral-border: #E2E8F0;
  --neutral-text: #1E293B;
  --neutral-muted: #64748B;
  --primary: #3B82F6;
  --primary-hover: #2563EB;
}

.bg-neutral-bg { background-color: #F8FAFC; }
.text-neutral-text { color: #1E293B; }
.text-neutral-muted { color: #64748B; }
.text-neutral-muted { color: #64748B; }
.border-neutral-border { border-color: #E2E8F0; }
` : ''}
</style>
`;
}

// 主转换函数
async function convertAll() {
  console.log('🚀 开始批量转换 HTML 到 Vue3...\n');

  for (const page of pages) {
    try {
      const htmlPath = path.join(__dirname, page.file);

      if (!fs.existsSync(htmlPath)) {
        console.warn(`⚠️  跳过: ${page.file} (文件不存在)`);
        continue;
      }

      const html = fs.readFileSync(htmlPath, 'utf-8');
      const body = extractBody(html);
      const cleaned = cleanHtml(body);
      const converted = convertAttributes(cleaned);
      const styles = extractStyles(html);

      const vueContent = generateVueComponent(page, converted, styles);

      // 确定输出路径
      const outputDir = page.folder
        ? path.join(__dirname, page.folder)
        : __dirname;

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      const outputPath = path.join(outputDir, `${page.name}.vue`);
      fs.writeFileSync(outputPath, vueContent, 'utf-8');

      console.log(`✅ ${page.file} → ${page.folder ? page.folder + '/' : ''}${page.name}.vue`);
    } catch (error) {
      console.error(`❌ 转换失败 ${page.file}:`, error.message);
    }
  }

  console.log('\n✨ 转换完成！');
  console.log('\n📋 下一步：');
  console.log('1. 检查生成的 Vue 文件');
  console.log('2. 运行 npm run dev 测试页面');
  console.log('3. 根据需要调整样式和交互逻辑');
}

// 如果直接运行此脚本
if (require.main === module) {
  convertAll();
}

module.exports = { convertAll, pages };
