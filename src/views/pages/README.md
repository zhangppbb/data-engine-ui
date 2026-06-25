# Pages 页面目录

本目录包含从原始 HTML 文件转换而来的 Vue3 单文件组件。

## 转换说明

所有原始 HTML 文件已使用 `html-to-vue-converter.js` 脚本自动转换为 Vue3 组件。

## 目录结构

```
pages/
├── Index.vue              # 首页 (原 index.html)
├── Dashboard.vue          # 数据大屏 (原 dashboard.html)
├── Workspace.vue          # 工作空间 (原 workspace.html)
├── Profile.vue            # 个人中心 (原 profile.html)
├── SearchResults.vue      # 搜索结果 (原 search-results.html)
├── apps/
│   ├── Apps.vue           # 应用列表 (原 apps/apps.html)
│   ├── AiAgent.vue        # AI智能体 (原 apps/AI智能体.html)
│   ├── AppDetail.vue      # 应用详情 (原 apps/app-detail.html)
│   ├── AppSpec.vue        # 应用规格 (原 apps/app-spec.html)
│   ├── CreditEvaluation.vue # 信用评价 (原 apps/信用评价.html)
│   ├── ComplianceReview.vue # 合规审查 (原 apps/合规审查.html)
│   ├── MarketAnalysis.vue # 市场分析报告 (原 apps/市场分析报告.html)
│   └── MarketCompetition.vue # 市场竞争分析 (原 apps/市场竞争分析.html)
├── cases/
│   ├── Cases.vue          # 案例列表 (原 cases/cases.html)
│   ├── CasesCopy.vue      # 案例列表副本 (原 cases/cases-copy.html)
│   ├── CaseDetail.vue     # 案例详情 (原 cases/case-detail.html)
│   └── CaseDetailCopy.vue # 案例详情副本 (原 cases/case-detail-copy.html)
└── resources/
    ├── Resources.vue      # 资源列表 (原 resources/resources.html)
    ├── ApiMarket.vue      # API市场 (原 resources/api-market.html)
    ├── ApiDetail.vue      # API详情 (原 resources/api-detail.html)
    ├── McpMarket.vue      # MCP市场 (原 resources/mcp-market.html)
    ├── McpDetail.vue      # MCP详情 (原 resources/mcp-detail.html)
    ├── SkillMarket.vue    # 技能市场 (原 resources/skill-market.html)
    ├── SkillDetail.vue    # 技能详情 (原 resources/skill-detail.html)
    └── ResourceDetail.vue # 资源详情 (原 resources/resource-detail.html)
```

## 路由配置

所有页面路由已配置在 `src/router/modules/remaining.ts` 中：

| 路径 | 组件 | 说明 |
|------|------|------|
| `/pages/index` | Index.vue | 首页 |
| `/pages/dashboard` | Dashboard.vue | 数据大屏 |
| `/pages/workspace` | Workspace.vue | 工作空间 |
| `/pages/search-results` | SearchResults.vue | 搜索结果 |
| `/pages/profile` | Profile.vue | 个人资料 |
| `/pages/apps/list` | apps/Apps.vue | 应用列表 |
| `/pages/apps/ai-agent` | apps/AiAgent.vue | AI智能体 |
| `/pages/apps/detail/:id` | apps/AppDetail.vue | 应用详情 |
| `/pages/cases/list` | cases/Cases.vue | 案例列表 |
| `/pages/cases/detail/:id` | cases/CaseDetail.vue | 案例详情 |
| `/pages/resources/list` | resources/Resources.vue | 资源列表 |
| `/pages/resources/api-market` | resources/ApiMarket.vue | API市场 |
| `/pages/resources/mcp-market` | resources/McpMarket.vue | MCP市场 |
| `/pages/resources/skill-market` | resources/SkillMarket.vue | 技能市场 |

## 注意事项

1. 亮色主题页面（如 Workspace）使用 `shared-light.scss` 样式
2. 暗色主题页面使用 `shared.scss` 样式
3. 所有组件已集成图标组件 `@/components/Icon/src/Icon.vue`
4. 导航方法已统一封装为 `navigateTo(path)`

## 后续优化建议

1. 检查各页面的响应式布局是否正常
2. 添加页面级别的状态管理（如 Pinia store）
3. 优化首屏加载性能
4. 添加页面过渡动画
5. 完善错误处理和加载状态
