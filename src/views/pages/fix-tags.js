/**
 * 修复 Vue 文件中的标签匹配问题
 * 确保 <router-link> 有对应的 </router-link>
 */

const fs = require('fs');
const path = require('path');

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

function fixTags(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // 修复 <a> 标签带有 href="javascript:void(0);" 但结束标签是 </router-link> 的问题
  // 将这些还原为 <a></a>
  const voidLinkRegex = /<a\s+([^>]*?)href="javascript:void\(0\);"([^>]*?)>([\s\S]*?)<\/router-link>/g;
  content = content.replace(voidLinkRegex, '<a $1href="javascript:void(0);"$2>$3</a>');

  // 修复 <a> 标签带有 href="#" 但结束标签是 </router-link> 的问题
  const hashLinkRegex = /<a\s+([^>]*?)href="#"([^>]*?)>([\s\S]*?)<\/router-link>/g;
  content = content.replace(hashLinkRegex, '<a $1href="#"$2>$3</a>');

  // 统计 router-link 开始和结束标签数量
  const routerLinkStartCount = (content.match(/<router-link/g) || []).length;
  const routerLinkEndCount = (content.match(/<\/router-link>/g) || []).length;

  // 统计 a 标签开始和结束标签数量（排除 router-link 转换的）
  const aStartCount = (content.match(/<a[\s>]/g) || []).length;
  const aEndCount = (content.match(/<\/a>/g) || []).length;

  if (routerLinkStartCount !== routerLinkEndCount || aStartCount !== aEndCount) {
    console.log(`⚠️  ${path.basename(filePath)}: router-link(${routerLinkStartCount}/${routerLinkEndCount}), a(${aStartCount}/${aEndCount})`);
  }

  // 检查是否有不匹配的标签
  if (content !== fs.readFileSync(filePath, 'utf-8')) {
    modified = true;
    fs.writeFileSync(filePath, content, 'utf-8');
  }

  return modified;
}

async function main() {
  console.log('🔧 开始修复标签匹配...\n');

  let fixedCount = 0;
  const baseDir = __dirname;

  for (const file of vueFiles) {
    const filePath = path.join(baseDir, file);

    if (!fs.existsSync(filePath)) {
      continue;
    }

    try {
      const fixed = fixTags(filePath);
      if (fixed) {
        console.log(`✅ 已修复: ${file}`);
        fixedCount++;
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
