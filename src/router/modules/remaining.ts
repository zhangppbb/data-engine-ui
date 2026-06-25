import { Layout } from '@/utils/routerHelper'
import DataEngineLayout  from '@/layout/data-engine/PageLayout.vue'
import { RouterView } from 'vue-router'

const { t } = useI18n()
/**
 * redirect: noredirect        当设置 noredirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'          设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta : {
 hidden: true              当设置 true 的时候该路由不会再侧边栏出现 如404，login等页面(默认 false)

 alwaysShow: true          当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式，
 只有一个时，会将那个子路由当做根路由显示在侧边栏，
 若你想不管路由下面的 children 声明的个数都显示你的根路由，
 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，
 一直显示根路由(默认 false)

 title: 'title'            设置该路由在侧边栏和面包屑中展示的名字

 icon: 'svg-name'          设置该路由的图标

 noCache: true             如果设置为true，则不会被 <keep-alive> 缓存(默认 false)

 breadcrumb: false         如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)

 affix: true               如果设置为true，则会一直固定在tag项中(默认 false)

 noTagsView: true          如果设置为true，则不会出现在tag中(默认 false)

 activeMenu: '/dashboard'  显示高亮的路由路径

 followAuth: '/dashboard'  跟随哪个路由进行权限过滤

 canTo: true               设置为true即使hidden为true，也依然可以进行路由跳转(默认 false)
 }
 **/
const remainingRouter: AppRouteRecordRaw[] = [
  // {
  //   path: '/',
  //   redirect: '/welcome',
  //   name: 'welcome',
  //   meta: {
  //     hidden: true,
  //     noTagsView: true
  //   }
  // },
  {
    path: '/redirect',
    component: Layout,
    name: 'Redirect',
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'Redirect',
        component: () => import('@/views/Redirect/Redirect.vue'),
        meta: {}
      }
    ],
    meta: {
      hidden: true,
      noTagsView: true
    }
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/Index.vue'),
    name: 'Screen',
    meta: {
      title: '大屏',
      hidden: true
    }
  },
  {
    path: '/',
    component: DataEngineLayout,
    redirect: '/index',
    name: 'Home',
    meta: {},
    children: [
      
      {
        path: 'workspace',
        component: () => import('@/views/workspace/Index.vue'),
        name: 'Workspace',
        meta: {
          title: t('router.home'),
          icon: 'ep:home-filled',
          noCache: false,
          affix: true,
          hideBreadcrumb: true
        }
      },
        {
        path: 'index',
        component: () => import('@/views/index/Index.vue'),
        name: 'Index',
        meta: {
          title: t('router.home'),
          icon: 'ep:home-filled',
          noCache: false,
          affix: true,
          hideBreadcrumb: true
        }
      },
      {
        path: 'profile',
        component: () => import('@/views/personal-info/Index.vue'),
        name: 'PersonalInfo',
        meta: {
          title: t('router.home'),
          icon: 'ep:home-filled',
          noCache: false,
          affix: true,
          hideBreadcrumb: true
        }
      },
     {
        path: 'apps',
        component: RouterView,
        name: 'Apps',
        meta: {
          title: '应用中心',
          icon: 'ep:grid'
        },
        children: [
          {
            path: 'list',
            component: () => import('@/views/apps/list/Index.vue'),
            name: 'AppsList',
            meta: {
              title: t('router.home'),
              icon: 'ep:home-filled',
              noCache: false,
              affix: true
            }
          },
          {
            path: 'details/:id',
            component: () => import('@/views/apps/details/Index.vue'),
            name: 'AppsDetails',
            meta: {
              title: t('router.home'),
              icon: 'ep:home-filled',
              noCache: false,
              affix: true
            }
          },

          // 报告
          {
            path: 'report',
            component: () => import('@/views/apps/report/list/Index.vue'),
            name: 'AppsReport',
            meta: {
              title: '报告',
              hidden: true
            }
          },
          {
            path: 'report/details/:id',
            component: () => import('@/views/apps/report/details/Index.vue'),
            name: 'AppsReportQuery',
            meta: {
              title: '报告',
              hidden: true
            }
          }
        ]
      },

      // resources
      {
        path: 'resources/list',
        component: () => import('@/views/resources/list/Index.vue'),
        name: 'ResourcesList',
        meta: {
          title: t('router.home'),
          icon: 'ep:home-filled',
          noCache: false,
          affix: true
        },
      },
      {
        path: 'resources/api',
        component: () => import('@/views/resources/api/list/Index.vue'),
        name: 'ResourcesApiList',
        meta: {
          title: t('router.home'),
          icon: 'ep:home-filled',
          noCache: false,
          affix: true
        }
      },
        {
        path: 'resources/api/details/:id',
        component: () => import('@/views/resources/api/details/Index.vue'),
        name: 'ResourcesApiDetails',
        meta: {
          title: t('router.home'),
          icon: 'ep:home-filled',
          noCache: false,
          affix: true
        }
      },
      {
        path: 'resources/api/access-guide',
        component: () => import('@/views/resources/api/access-guide/Index.vue'),
        name: 'ResourcesApiAccessGuide',
        meta: {
          title: t('router.home'),
          icon: 'ep:home-filled',
          noCache: false,
          affix: true
        }
      },
      {
        path: 'resources/mcp',
        component: () => import('@/views/resources/mcp/list/Index.vue'),
        name: 'ResourcesMcp',
        meta: {
          title: t('router.home'),
          icon: 'ep:home-filled',
          noCache: false,
          affix: true
        }
      },
      {
        path: 'resources/skill',
        component: () => import('@/views/resources/skill/list/Index.vue'),
        name: 'ResourcesSkill',
        meta: {
          title: t('router.home'),
          icon: 'ep:home-filled',
          noCache: false,
          affix: true
        }
      },
       {
        path: 'resources/skill/access-guide',
        component: () => import('@/views/resources/skill/access-guide/Index.vue'),
        name: 'ResourcesSkillAccessGuide',
        meta: {
          title: t('router.home'),
          icon: 'ep:home-filled',
          noCache: false,
          affix: true
        }
      },
       {
        path: 'resources/skill/kyb',
        component: () => import('@/views/resources/skill/kyb/list/Index.vue'),
        name: 'ResourcesSkillKyb',
        meta: {
          title: t('router.home'),
          icon: 'ep:home-filled',
          noCache: false,
          affix: true
        }
      },

      {
        path: 'cases/list',
        component: () => import('@/views/cases/list/Index.vue'),
        name: 'CasesList',
        meta: {
          title: t('router.home'),
          icon: 'ep:home-filled',
          noCache: false,
          affix: true
        }
      },
      {
        path: 'cases/presentation/:id',
        component: () => import('@/views/cases/presentation/Index.vue'),
        name: 'CasesPresentation',
        meta: {
          title: t('router.home'),
          icon: 'ep:home-filled',
          noCache: false,
          affix: true
        }
      },
      // 开发者中心
      {
        path: 'developer',
        component: RouterView,
        name: 'Developer',
        meta: {
          title: '开发者中心',
          icon: 'ep:tools'
        },
        children: [
          {
            path: 'personal-api-key',
            component: () => import('@/views/developer/personalApiKey/index.vue'),
            name: 'PersonalApiKey',
            meta: {
              title: '个人API Key',
              icon: 'ep:key'
            }
          },
          {
            path: 'team',
            component: () => import('@/views/developer/team/index.vue'),
            name: 'TeamManagement',
            meta: {
              title: '团队管理',
              icon: 'ep:user-filled'
            }
          },
          {
            path: 'team-api-key',
            component: () => import('@/views/developer/teamApiKey/index.vue'),
            name: 'TeamApiKey',
            meta: {
              title: '团队API Key',
              icon: 'ep:key'
            }
          },
          {
            path: 'api-access-log',
            component: () => import('@/views/developer/apiAccessLog/index.vue'),
            name: 'ApiAccessLog',
            meta: {
              title: '调用日志',
              icon: 'ep:document'
            }
          }
        ]
      }
    ]
  },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/index',
  //   name: 'Home',
  //   meta: {},
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/Home/Index.vue'),
  //       name: 'Index',
  //       meta: {
  //         title: t('router.home'),
  //         icon: 'ep:home-filled',
  //         noCache: false,
  //         affix: true
  //       }
  //     }
  //   ]
  // },
  // Pages 静态页面路由 - 独立布局（无系统菜单）
  {
    path: '/pages/index',
    component: () => import('@/views/pages/Index.vue'),
    name: 'PagesIndex',
    meta: {
      title: '首页',
      icon: 'ep:home-filled',
      hidden: true
    }
  },
  {
    path: '/pages/dashboard',
    component: () => import('@/views/pages/Dashboard.vue'),
    name: 'PagesDashboard',
    meta: {
      title: '数据仪表板',
      icon: 'ep:monitor',
      hidden: true
    }
  },
  {
    path: '/pages/workspace',
    component: () => import('@/views/pages/Workspace.vue'),
    name: 'PagesWorkspace',
    meta: {
      title: '工作空间',
      icon: 'ep:office-building',
      hidden: true
    }
  },
  {
    path: '/pages/search-results',
    component: () => import('@/views/pages/SearchResults.vue'),
    name: 'PagesSearchResults',
    meta: {
      title: '搜索结果',
      icon: 'ep:search',
      hidden: true
    }
  },
  {
    path: '/pages/profile',
    component: () => import('@/views/pages/Profile.vue'),
    name: 'PagesProfile',
    meta: {
      title: '个人资料',
      icon: 'ep:user',
      hidden: true
    }
  },
  // Apps 应用页面 - 独立布局
  {
    path: '/pages/apps',
    component: RouterView,
    name: 'PagesApps',
    meta: {
      title: '应用中心',
      icon: 'ep:grid'
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/pages/apps/Apps.vue'),
        name: 'PagesAppsList',
        meta: {
          title: '应用列表',
          icon: 'ep:grid'
        }
      },
      {
        path: 'ai-agent',
        component: () => import('@/views/pages/apps/AiAgent.vue'),
        name: 'PagesAiAgent',
        meta: {
          title: 'AI智能体',
          icon: 'ep:cpu'
        }
      },
      {
        path: 'credit-evaluation',
        component: () => import('@/views/pages/apps/CreditEvaluation.vue'),
        name: 'PagesCreditEvaluation',
        meta: {
          title: '信用评价',
          icon: 'ep:medal'
        }
      },
      {
        path: 'compliance-review',
        component: () => import('@/views/pages/apps/ComplianceReview.vue'),
        name: 'PagesComplianceReview',
        meta: {
          title: '合规审查',
          icon: 'ep:document-checked'
        }
      },
      {
        path: 'market-analysis',
        component: () => import('@/views/pages/apps/MarketAnalysis.vue'),
        name: 'PagesMarketAnalysis',
        meta: {
          title: '市场分析报告',
          icon: 'ep:trend-charts'
        }
      },
      {
        path: 'market-competition',
        component: () => import('@/views/pages/apps/MarketCompetition.vue'),
        name: 'PagesMarketCompetition',
        meta: {
          title: '市场竞争分析',
          icon: 'ep:data-line'
        }
      },

      // 动态详情页
      {
        path: 'detail/:id',
        component: () => import('@/views/pages/apps/AppDetail.vue'),
        name: 'PagesAppDetail',
        meta: {
          title: '应用详情',
          hidden: true
        }
      },

      {
        path: 'spec/:id',
        component: () => import('@/views/pages/apps/AppSpec.vue'),
        name: 'PagesAppSpec',
        meta: {
          title: '应用规格',
          hidden: true
        }
      }
    ]
  },
  // Cases 案例页面 - 独立布局
  {
    path: '/pages/cases/list',
    component: () => import('@/views/pages/cases/Cases.vue'),
    name: 'PagesCasesList',
    meta: {
      title: '案例列表',
      icon: 'ep:list',
      hidden: true
    }
  },
  {
    path: '/pages/cases/detail/:id',
    component: () => import('@/views/pages/cases/CaseDetail.vue'),
    name: 'PagesCaseDetail',
    meta: {
      title: '案例详情',
      icon: 'ep:document',
      hidden: true
    }
  },
  // Resources 资源页面 - 独立布局
  {
    path: '/pages/resources/list',
    component: () => import('@/views/pages/resources/Resources.vue'),
    name: 'PagesResourcesList',
    meta: {
      title: '资源列表',
      icon: 'ep:folder',
      hidden: true
    }
  },
  {
    path: '/pages/resources/api-market',
    component: () => import('@/views/pages/resources/ApiMarket.vue'),
    name: 'PagesApiMarket',
    meta: {
      title: 'API市场',
      icon: 'ep:connection',
      hidden: true
    }
  },
  {
    path: '/pages/resources/api/:id',
    component: () => import('@/views/pages/resources/ApiDetail.vue'),
    name: 'PagesApiDetail',
    meta: {
      title: 'API详情',
      icon: 'ep:document',
      hidden: true
    }
  },
  {
    path: '/pages/resources/mcp-market',
    component: () => import('@/views/pages/resources/McpMarket.vue'),
    name: 'PagesMcpMarket',
    meta: {
      title: 'MCP市场',
      icon: 'ep:box',
      hidden: true
    }
  },
  {
    path: '/pages/resources/mcp/:id',
    component: () => import('@/views/pages/resources/McpDetail.vue'),
    name: 'PagesMcpDetail',
    meta: {
      title: 'MCP详情',
      icon: 'ep:document',
      hidden: true
    }
  },
  {
    path: '/pages/resources/skill-market',
    component: () => import('@/views/pages/resources/SkillMarket.vue'),
    name: 'PagesSkillMarket',
    meta: {
      title: '技能市场',
      icon: 'ep:magic-stick',
      hidden: true
    }
  },
  {
    path: '/pages/resources/skill/:id',
    component: () => import('@/views/pages/resources/SkillDetail.vue'),
    name: 'PagesSkillDetail',
    meta: {
      title: '技能详情',
      icon: 'ep:document',
      hidden: true
    }
  },
  {
    path: '/pages/resources/:id',
    component: () => import('@/views/pages/resources/ResourceDetail.vue'),
    name: 'PagesResourceDetail',
    meta: {
      title: '资源详情',
      icon: 'ep:document',
      hidden: true
    }
  },
  {
    path: '/user',
    component: Layout,
    name: 'UserInfo',
    meta: {
      hidden: true
    },
    children: [
      {
        path: 'profile',
        component: () => import('@/views/Profile/Index.vue'),
        name: 'Profile',
        meta: {
          canTo: true,
          hidden: true,
          noTagsView: false,
          icon: 'ep:user',
          title: t('common.profile')
        }
      },
      {
        path: 'notify-message',
        component: () => import('@/views/system/notify/my/index.vue'),
        name: 'MyNotifyMessage',
        meta: {
          canTo: true,
          hidden: true,
          noTagsView: false,
          icon: 'ep:message',
          title: '我的站内信'
        }
      }
    ]
  },
  {
    path: '/dict',
    component: Layout,
    name: 'dict',
    meta: {
      hidden: true
    },
    children: [
      {
        path: 'type/data/:dictType/:dictCategory',
        component: () => import('@/views/system/dict/data/index.vue'),
        name: 'SystemDictData',
        meta: {
          title: '字典数据',
          noCache: true,
          hidden: true,
          canTo: true,
          icon: '',
          activeMenu: '/system/dict'
        }
      }
    ]
  },
  {
    path: '/codegen',
    component: Layout,
    name: 'CodegenEdit',
    meta: {
      hidden: true
    },
    children: [
      {
        path: 'edit',
        component: () => import('@/views/infra/codegen/EditTable.vue'),
        name: 'InfraCodegenEditTable',
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          icon: 'ep:edit',
          title: '修改生成配置',
          activeMenu: 'infra/codegen/index'
        }
      }
    ]
  },
  {
    path: '/job',
    component: Layout,
    name: 'JobL',
    meta: {
      hidden: true
    },
    children: [
      {
        path: 'job-log',
        component: () => import('@/views/infra/job/logger/index.vue'),
        name: 'InfraJobLog',
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          icon: 'ep:edit',
          title: '调度日志',
          activeMenu: 'infra/job/index'
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login/components/CeiShi.vue'),
    name: 'Login',
    meta: {
      hidden: true,
      title: t('router.login'),
      noTagsView: true
    }
  },
  {
    path: '/register',
    component: () => import('@/views/Login/Register.vue'),
    name: 'Register',
    meta: {
      hidden: true,
      title: '注册',
      noTagsView: true
    }
  },
  {
    path: '/ssocode',
    component: () => import('@/views/Login/SSO.vue'),
    name: 'Ssocode',
    meta: {
      hidden: true,
      title: t('router.login'),
      noTagsView: true
    }
  },
  {
    path: '/sso',
    component: () => import('@/views/Login/Login.vue'),
    name: 'SSOLogin',
    meta: {
      hidden: true,
      title: t('router.login'),
      noTagsView: true
    }
  },
    {
    path: '/jjtsso',
    component: () => import('@/views/Login/JJTSSO.vue'),
    name: 'Jjtsso',
    meta: {
      hidden: true,
      title: t('router.login'),
      noTagsView: true
    }
  },
  {
    path: '/social-login',
    component: () => import('@/views/Login/SocialLogin.vue'),
    name: 'SocialLogin',
    meta: {
      hidden: true,
      title: t('router.socialLogin'),
      noTagsView: true
    }
  },
  {
    path: '/403',
    component: () => import('@/views/Error/403.vue'),
    name: 'NoAccess',
    meta: {
      hidden: true,
      title: '403',
      noTagsView: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404.vue'),
    name: 'NoFound',
    meta: {
      hidden: true,
      title: '404',
      noTagsView: true
    }
  },
  {
    path: '/500',
    component: () => import('@/views/Error/500.vue'),
    name: 'Error',
    meta: {
      hidden: true,
      title: '500',
      noTagsView: true
    }
  },
  {
    path: '/bpm',
    component: Layout,
    name: 'bpm',
    meta: {
      hidden: true
    },
    children: [
      {
        path: 'manager/form/edit',
        component: () => import('@/views/bpm/form/editor/index.vue'),
        name: 'BpmFormEditor',
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: '设计流程表单',
          activeMenu: '/bpm/manager/form'
        }
      },
      {
        path: 'manager/definition',
        component: () => import('@/views/bpm/model/definition/index.vue'),
        name: 'BpmProcessDefinition',
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: '流程定义',
          activeMenu: '/bpm/manager/model'
        }
      },
      {
        path: 'process-instance/detail',
        component: () => import('@/views/bpm/processInstance/detail/index.vue'),
        name: 'BpmProcessInstanceDetail',
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: '流程详情',
          activeMenu: '/bpm/task/my'
        },
        props: (route) => ({
          id: route.query.id,
          taskId: route.query.taskId,
          activityId: route.query.activityId
        })
      },
      {
        path: 'process-instance/report',
        component: () => import('@/views/bpm/processInstance/report/index.vue'),
        name: 'BpmProcessInstanceReport',
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: '数据报表',
          activeMenu: '/bpm/manager/model'
        }
      },
      {
        path: 'oa/leave/create',
        component: () => import('@/views/bpm/oa/leave/create.vue'),
        name: 'OALeaveCreate',
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: '发起 OA 请假',
          activeMenu: '/bpm/oa/leave'
        }
      },
      {
        path: 'oa/leave/detail',
        component: () => import('@/views/bpm/oa/leave/detail.vue'),
        name: 'OALeaveDetail',
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: '查看 OA 请假',
          activeMenu: '/bpm/oa/leave'
        }
      },
      {
        path: 'manager/model/create',
        component: () => import('@/views/bpm/model/form/index.vue'),
        name: 'BpmModelCreate',
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: '创建流程',
          activeMenu: '/bpm/manager/model'
        }
      },
      {
        path: 'manager/model/:type/:id',
        component: () => import('@/views/bpm/model/form/index.vue'),
        name: 'BpmModelUpdate',
        meta: {
          noCache: true,
          hidden: true,
          canTo: true,
          title: '修改流程',
          activeMenu: '/bpm/manager/model'
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/Error/404.vue'),
    name: '',
    meta: {
      title: '404',
      hidden: true,
      breadcrumb: false
    }
  }
]

export default remainingRouter
