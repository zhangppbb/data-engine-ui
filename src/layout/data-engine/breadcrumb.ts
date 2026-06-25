export interface BreadcrumbItem {
  label: string
  path?: string
}

/** 按路由 name 配置的静态面包屑（末级为当前页时可不带 path） */
export const ROUTE_BREADCRUMBS: Record<string, BreadcrumbItem[]> = {
  AppsList: [
    { label: '首页', path: '/' },
    { label: '应用馆', path: '/apps/list' }
  ],
  AppsReport: [
    { label: '首页', path: '/' },
    { label: '应用馆', path: '/apps/list' },
    { label: '研究报告', path: '/apps/report' }
  ],
  ResourcesList: [
    { label: '首页', path: '/' },
    { label: '资源馆', path: '/resources/list' }
  ],
  ResourcesApiList: [
    { label: '首页', path: '/' },
    { label: '资源馆', path: '/resources/list' },
    { label: 'API集市', path: '/resources/api/list' }
  ],
  ResourcesApiAccessGuide: [
    { label: '首页', path: '/' },
    { label: '资源馆', path: '/resources/list' },
    { label: '接入指南', path: '/resources/api/access-guide' }
  ],
  ResourcesMcp: [
    { label: '首页', path: '/' },
    { label: '资源馆', path: '/resources/list' },
    { label: 'MCP集市', path: '/resources/mcp/list' }
  ],
  ResourcesSkill: [
    { label: '首页', path: '/' },
    { label: '资源馆', path: '/resources/list' },
    { label: 'SKILL广场', path: '/resources/skill' }
  ],
  ResourcesSkillAccessGuide: [
    { label: '首页', path: '/' },
    { label: '资源馆', path: '/resources/list' },
    { label: '接入指南', path: '/resources/api/access-guide' }
  ],
  ResourcesSkillKyb: [
    { label: '首页', path: '/' },
    { label: '资源馆', path: '/resources/list' },
    { label: 'SKILL广场', path: '/resources/skill' },
    { label: '安装与使用', path: '/resources/skill/kyb' }
  ],
  CasesList: [
    { label: '首页', path: '/' },
    { label: '案例馆', path: '/cases/list' }
  ]
}

/** 详情页等需要动态末级面包屑的路由：仅配置前缀，末级由页面通过 usePageBreadcrumb 设置 */
export const ROUTE_BREADCRUMB_BASE: Record<string, BreadcrumbItem[]> = {
  AppsDetails: [
    { label: '首页', path: '/' },
    { label: '应用馆', path: '/apps/list' }
  ],
  AppsReportQuery: [
    { label: '首页', path: '/' },
    { label: '应用馆', path: '/apps/list' },
    { label: '研究报告', path: '/apps/report' }
  ],
  ResourcesApiDetails: [
    { label: '首页', path: '/' },
    { label: '资源馆', path: '/resources/list' },
    { label: 'API集市', path: '/resources/api' }
  ],
  CasesPresentation: [
    { label: '首页', path: '/' },
    { label: '案例馆', path: '/cases/list' }
  ]
}
