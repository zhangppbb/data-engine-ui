/**
 * 修复 Vue 文件中的路由链接
 * 将 HTML 格式的 href 转换为 Vue Router 格式
 */

const fs = require('fs');
const path = require('path');

// 路由映射表
const routeMap = {
  // 根目录页面
  'index.html': '/pages/index',
  '../index.html': '/pages/index',
  './index.html': '/pages/index',

  'dashboard.html': '/pages/dashboard',
  '../dashboard.html': '/pages/dashboard',

  'workspace.html': '/pages/workspace',
  '../workspace.html': '/pages/workspace',

  'profile.html': '/pages/profile',
  '../profile.html': '/pages/profile',

  'search-results.html': '/pages/search-results',
  '../search-results.html': '/pages/search-results',

  // Apps 页面
  'apps/apps.html': '/pages/apps/list',
  '../apps/apps.html': '/pages/apps/list',
  './apps.html': '/pages/apps/list',
  'apps.html': '/pages/apps/list',

  'apps/AI智能体.html': '/pages/apps/ai-agent',
  '../apps/AI智能体.html': '/pages/apps/ai-agent',
  './AI智能体.html': '/pages/apps/ai-agent',
  'AI智能体.html': '/pages/apps/ai-agent',

  'apps/app-detail.html': '/pages/apps/detail/demo',
  '../apps/app-detail.html': '/pages/apps/detail/demo',
  './app-detail.html': '/pages/apps/detail/demo',
  'app-detail.html': '/pages/apps/detail/demo',

  'apps/app-spec.html': '/pages/apps/spec/demo',
  '../apps/app-spec.html': '/pages/apps/spec/demo',
  './app-spec.html': '/pages/apps/spec/demo',
  'app-spec.html': '/pages/apps/spec/demo',

  'apps/信用评价.html': '/pages/apps/credit-evaluation',
  '../apps/信用评价.html': '/pages/apps/credit-evaluation',

  'apps/合规审查.html': '/pages/apps/compliance-review',
  '../apps/合规审查.html': '/pages/apps/compliance-review',

  'apps/市场分析报告.html': '/pages/apps/market-analysis',
  '../apps/市场分析报告.html': '/pages/apps/market-analysis',
  'apps/市场分析报告 .html': '/pages/apps/market-analysis',

  'apps/市场竞争分析.html': '/pages/apps/market-competition',
  '../apps/市场竞争分析.html': '/pages/apps/market-competition',

  // Cases 页面
  'cases/cases.html': '/pages/cases/list',
  '../cases/cases.html': '/pages/cases/list',
  './cases.html': '/pages/cases/list',
  'cases.html': '/pages/cases/list',

  'cases/case-detail.html': '/pages/cases/detail/demo',
  '../cases/case-detail.html': '/pages/cases/detail/demo',
  './case-detail.html': '/pages/cases/detail/demo',
  'case-detail.html': '/pages/cases/detail/demo',

  // Resources 页面
  'resources/resources.html': '/pages/resources/list',
  '../resources/resources.html': '/pages/resources/list',
  './resources.html': '/pages/resources/list',
  'resources.html': '/pages/resources/list',

  'resources/api-market.html': '/pages/resources/api-market',
  '../resources/api-market.html': '/pages/resources/api-market',
  './api-market.html': '/pages/resources/api-market',
  'api-market.html': '/pages/resources/api-market',

  'resources/api-detail.html': '/pages/resources/api/demo',
  '../resources/api-detail.html': '/pages/resources/api/demo',
  './api-detail.html': '/pages/resources/api/demo',
  'api-detail.html': '/pages/resources/api/demo',

  'resources/mcp-market.html': '/pages/resources/mcp-market',
  '../resources/mcp-market.html': '/pages/resources/mcp-market',
  './mcp-market.html': '/pages/resources/mcp-market',
  'mcp-market.html': '/pages/resources/mcp-market',

  'resources/mcp-detail.html': '/pages/resources/mcp/demo',
  '../resources/mcp-detail.html': '/pages/resources/mcp/demo',
  './mcp-detail.html': '/pages/resources/mcp/demo',
  'mcp-detail.html': '/pages/resources/mcp/demo',

  'resources/resource-detail.html': '/pages/resources/demo',
  '../resources/resource-detail.html': '/pages/resources/demo',
  './resource-detail.html': '/pages/resources/demo',
  'resource-detail.html': '/pages/resources/demo',

  'resources/skill-market.html': '/pages/resources/skill-market',
  '../resources/skill-market.html': '/pages/resources/skill-market',
  './skill-market.html': '/pages/resources/skill-market',
  'skill-market.html': '/pages/resources/skill-market',

  'resources/skill-detail.html': '/pages/resources/skill/demo',
  '../resources/skill-detail.html': '/pages/resources/skill/demo',
  './skill-detail.html': '/pages/resources/skill/demo',
  'skill-detail.html': '/pages/resources/skill/demo',
};

// 需要处理的文件列表
const vueFiles = [
  'Index.vue',
  'Dashboard.vue',
  'Workspace.vue',
  'Profile.vue',
  'SearchResults.vue',
  'apps/Apps.vue',
  'apps/AiAgent.vue',
  'apps/AppDetail.vue',
  'apps/AppSpec.vue',
  'apps/CreditEvaluation.vue',
  'apps/ComplianceReview.vue',
  'apps/MarketAnalysis.vue',
  'apps/MarketCompetition.vue',
  'cases/Cases.vue',
  'cases/CasesCopy.vue',
  'cases/CaseDetail.vue',
  'cases/CaseDetailCopy.vue',
  'resources/Resources.vue',
  'resources/ApiMarket.vue',
  'resources/ApiDetail.vue',
  'resources/McpMarket.vue',
  'resources/McpDetail.vue',
  'resources/ResourceDetail.vue',
  'resources/SkillMarket.vue',
  'resources/SkillDetail.vue',
];

// 修复单个文件
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // 替换 href 链接
  for (const [oldPath, newPath] of Object.entries(routeMap)) {
    // 匹配 href="oldPath" 或 href='oldPath'
    const regex1 = new RegExp(`href="${oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g');
    const regex2 = new RegExp(`href='${oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`, 'g');

    if (regex1.test(content) || regex2.test(content)) {
      content = content.replace(regex1, `to="${newPath}"`);
      content = content.replace(regex2, `to="${newPath}"`);
      modified = true;
    }
  }

  // 将 <a> 标签转换为 <router-link>（如果包含 to 属性）
  // 但保留外部链接和锚点链接
  content = content.replace(/<a\s+([^>]*)to="([^"]*)"([^>]*)>/g, (match, before, url, after) => {
    // 检查是否是外部链接
    if (url.startsWith('http') || url.startsWith('#')) {
      return match;
    }
    return `<router-link ${before}to="${url}"${after}>`;
  });
  content = content.replace(/<\/a>/g, '</router-link>');

  // 修复自闭合标签
  content = content.replace(/<router-link([^>]*?)\/>/g, '<router-link$1></router-link>');

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  return false;
}

// 主函数
async function main() {
  console.log('🔧 开始修复路由链接...\n');

  let fixedCount = 0;
  const baseDir = __dirname;

  for (const file of vueFiles) {
    const filePath = path.join(baseDir, file);

    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️  跳过: ${file} (文件不存在)`);
      continue;
    }

    try {
      const fixed = fixFile(filePath);
      if (fixed) {
        console.log(`✅ 已修复: ${file}`);
        fixedCount++;
      } else {
        console.log(`⏭️  无需修复: ${file}`);
      }
    } catch (error) {
      console.error(`❌ 修复失败 ${file}:`, error.message);
    }
  }

  console.log(`\n✨ 完成！共修复 ${fixedCount} 个文件`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, routeMap };
